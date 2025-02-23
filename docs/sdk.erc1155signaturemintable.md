<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [Erc1155SignatureMintable](./sdk.erc1155signaturemintable.md)

## Erc1155SignatureMintable class

Enables generating dynamic ERC1155 NFTs with rules and an associated signature, which can then be minted by anyone securely

<b>Signature:</b>

```typescript
export declare class Erc1155SignatureMintable implements DetectableFeature 
```
<b>Implements:</b> DetectableFeature

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(contractWrapper, storage, roles)](./sdk.erc1155signaturemintable._constructor_.md) |  | Constructs a new instance of the <code>Erc1155SignatureMintable</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [featureName](./sdk.erc1155signaturemintable.featurename.md) |  | "ERC1155SignatureMintable" |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [generate(payloadToSign)](./sdk.erc1155signaturemintable.generate.md) |  | Generate a signature that can be used to mint an NFT dynamically. |
|  [generateBatch(payloadsToSign)](./sdk.erc1155signaturemintable.generatebatch.md) |  | Generate a batch of signatures that can be used to mint many new NFTs dynamically. |
|  [generateBatchFromTokenIds(payloadsToSign)](./sdk.erc1155signaturemintable.generatebatchfromtokenids.md) |  | Genrate a batch of signatures that can be used to mint new NFTs or additionaly supply to existing NFTs dynamically. |
|  [generateFromTokenId(payloadToSign)](./sdk.erc1155signaturemintable.generatefromtokenid.md) |  | Generate a signature that can be used to mint additionaly supply to an existing NFT. |
|  [mint(signedPayload)](./sdk.erc1155signaturemintable.mint.md) |  | Mint a dynamically generated NFT |
|  [mintBatch(signedPayloads)](./sdk.erc1155signaturemintable.mintbatch.md) |  | Mint any number of dynamically generated NFT at once |
|  [verify(signedPayload)](./sdk.erc1155signaturemintable.verify.md) |  | Verify that a payload is correctly signed |

