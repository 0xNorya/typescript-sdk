<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [NFTCollection](./sdk.nftcollection.md) &gt; [mintBatch](./sdk.nftcollection.mintbatch.md)

## NFTCollection.mintBatch() method

Mint Many unique NFTs

<b>Signature:</b>

```typescript
mintBatch(metadata: NFTMetadataOrUri[]): Promise<TransactionResultWithId<NFTMetadataOwner>[]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  metadata | NFTMetadataOrUri\[\] |  |

<b>Returns:</b>

Promise&lt;[TransactionResultWithId](./sdk.transactionresultwithid.md)<!-- -->&lt;[NFTMetadataOwner](./sdk.nftmetadataowner.md)<!-- -->&gt;\[\]&gt;

## Remarks

Mint many unique NFTs at once to the connected wallet

## Example


```javascript*
// Custom metadata of the NFTs you want to mint.
const metadatas = [{
  name: "Cool NFT #1",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
}, {
  name: "Cool NFT #2",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/other/image.png"),
}];

const tx = await contract.mintBatch(metadatas);
const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
const firstTokenId = tx[0].id; // token id of the first minted NFT
const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
```

