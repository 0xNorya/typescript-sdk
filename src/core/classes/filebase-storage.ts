import { FetchError } from "../../common/error";
import {
  DEFAULT_IPFS_GATEWAY,
  TW_FILEBASE_SERVER_URL,
} from "../../constants/urls";
import { IStorage } from "../interfaces/IStorage";
import { FileOrBuffer, JsonObject } from "../types";
import {
  replaceFilePropertiesWithHashes,
  replaceHashWithGatewayUrl,
  resolveGatewayUrl,
} from "../helpers/storage";

if (!globalThis.FormData) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  globalThis.FormData = require("form-data");
}

/**
 * @internal
 */
interface CidWithFileName {
  // base cid of the directory
  cid: string;

  // file name of the file without cid
  fileNames: string[];
}

/**
 * IPFS Storage implementation, accepts custom IPFS gateways
 * @public
 */
export class IpfsStorage implements IStorage {
  private gatewayUrl: string;

  constructor(gatewayUrl: string = DEFAULT_IPFS_GATEWAY) {
    this.gatewayUrl = `${gatewayUrl.replace(/\/$/, "")}/`;
  }

  /**
   * {@inheritDoc IStorage.upload}
   */
  public async upload(
    data: string | FileOrBuffer,
    contractAddress?: string,
    signerAddress?: string,
  ): Promise<string> {
    const cid = await this.uploadBatch(
      [data],
      0,
      contractAddress,
      signerAddress,
    );
    return `${cid}0`;
  }

  /**
   * {@inheritDoc IStorage.uploadBatch}
   */
  public async uploadBatch(
    files: (string | FileOrBuffer)[],
    fileStartNumber = 0,
    contractAddress?: string,
    signerAddress?: string,
  ): Promise<string> {
    const { cid } = await this.uploadBatchWithCid(
      files,
      fileStartNumber,
      contractAddress,
      signerAddress,
    );

    return `ipfs://${cid}/`;
  }

  public async getSignedUrl(filename: string): Promise<string> {
    const res = await fetch(`${TW_FILEBASE_SERVER_URL}/signed-url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename }),
    });

    if (!res.ok) {
      throw new FetchError(`Failed to get upload token`);
    }
    const url = await res.json();
    return url;
  }

  /**
   * {@inheritDoc IStorage.get}
   */
  public async get(hash: string): Promise<Record<string, any>> {
    const res = await this._get(hash);
    const json = await res.json();
    return replaceHashWithGatewayUrl(json, "ipfs://", this.gatewayUrl);
  }

  /**
   * {@inheritDoc IStorage.getRaw}
   */
  public async getRaw(hash: string): Promise<string> {
    const res = await this._get(hash);
    return await res.text();
  }

  /**
   * {@inheritDoc IStorage.uploadMetadata}
   */
  public async uploadMetadata(
    metadata: JsonObject,
    contractAddress?: string,
    signerAddress?: string,
  ): Promise<string> {
    // since there's only single object, always use the first index
    const { metadataUris } = await this.uploadMetadataBatch(
      [metadata],
      0,
      contractAddress,
      signerAddress,
    );
    return metadataUris[0];
  }

  /**
   * {@inheritDoc IStorage.uploadMetadataBatch}
   */
  public async uploadMetadataBatch(
    metadatas: JsonObject[],
    fileStartNumber?: number,
    contractAddress?: string,
    signerAddress?: string,
  ) {
    const metadataToUpload = (await this.batchUploadProperties(metadatas)).map(
      (m: any) => JSON.stringify(m),
    );

    const { cid, fileNames } = await this.uploadBatchWithCid(
      metadataToUpload,
      fileStartNumber,
      contractAddress,
      signerAddress,
    );

    const baseUri = `ipfs://${cid}/`;
    const uris = fileNames.map((filename) => `${baseUri}${filename}`);

    return {
      baseUri,
      metadataUris: uris,
    };
  }

  /** *************************
   * PRIVATE FUNCTIONS
   *************************/

  private async _get(hash: string): Promise<Response> {
    let uri = hash;
    if (hash) {
      uri = resolveGatewayUrl(hash, "ipfs://", this.gatewayUrl);
    }
    const result = await fetch(uri);
    if (!result.ok) {
      throw new Error(`Status code (!= 200) =${result.status}`);
    }
    return result;
  }

  /**
   * Pre-processes metadata and uploads all file properties
   * to storage in *bulk*, then performs a string replacement of
   * all file properties -\> the resulting ipfs uri. This is
   * called internally by `uploadMetadataBatch`.
   *
   * @internal
   *
   * @param metadata - The metadata to recursively process
   * @returns - The processed metadata with properties pointing at ipfs in place of `File | Buffer`
   */
  private async batchUploadProperties(metadatas: JsonObject[]) {
    const filesToUpload = metadatas.flatMap((m) =>
      this.buildFilePropertiesMap(m, []),
    );
    if (filesToUpload.length === 0) {
      return metadatas;
    }
    const { cid, fileNames } = await this.uploadBatchWithCid(filesToUpload);

    const cids = [];
    // recurse ordered array
    for (const filename of fileNames) {
      cids.push(`${cid}/${filename}`);
    }

    const finalMetadata = await replaceFilePropertiesWithHashes(
      metadatas,
      cids,
    );
    return finalMetadata;
  }

  /**
   * This function recurisely traverses an object and hashes any
   * `Buffer` or `File` objects into the returned map.
   *
   * @param object - the Json Object
   * @param files - The running array of files or buffer to upload
   * @returns - The final map of all hashes to files
   */
  private buildFilePropertiesMap(
    object: JsonObject,
    files: (File | Buffer)[] = [],
  ): (File | Buffer)[] {
    if (Array.isArray(object)) {
      object.forEach((element) => {
        this.buildFilePropertiesMap(element, files);
      });
    } else if (object) {
      const values = Object.values(object);
      for (const val of values) {
        if (val instanceof File || val instanceof Buffer) {
          files.push(val);
        } else if (typeof val === "object") {
          this.buildFilePropertiesMap(val as JsonObject, files);
        }
      }
    }
    return files;
  }

  private async uploadBatchWithCid(
    files: (string | FileOrBuffer)[],
    fileStartNumber = 0,
    contractAddress?: string,
    signerAddress?: string,
  ): Promise<CidWithFileName> {
    const asyncCids = files.map(async (file, i) => {
      if (typeof file === "string") {
        return file;
      }

      let filename = "";
      if (file instanceof File) {
        let extensions = "";
        if (file.name) {
          const extensionStartIndex = file.name.lastIndexOf(".");
          if (extensionStartIndex > -1) {
            extensions = file.name.substring(extensionStartIndex);
          }
        }
        filename = `${i + fileStartNumber}${extensions}`;
      } else if (file instanceof Buffer) {
        filename = `${i + fileStartNumber}`;
      } else if (file && file.name) {
        filename = `${file.name}`;
      } else {
        filename = `${i + fileStartNumber}`;
      }

      const signedUrl = await this.getSignedUrl(filename);

      const res = await fetch(signedUrl, {
        method: "PUT",
        body: file as any,
      });
    });

    const cids = await Promise.all(asyncCids);

    throw Error("Not implemented");
  }
}
