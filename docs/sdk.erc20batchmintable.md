<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [Erc20BatchMintable](./sdk.erc20batchmintable.md)

## Erc20BatchMintable class

Mint Many ERC20 Tokens at once

<b>Signature:</b>

```typescript
export declare class Erc20BatchMintable implements DetectableFeature 
```
<b>Implements:</b> DetectableFeature

## Remarks

Token batch minting functionality that handles unit parsing for you.

## Example


```javascript
const contract = await sdk.getContract("{{contract_address}}");
await contract.token.mint.batch.to(walletAddress, [nftMetadata1, nftMetadata2, ...]);
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(erc20, contractWrapper)](./sdk.erc20batchmintable._constructor_.md) |  | Constructs a new instance of the <code>Erc20BatchMintable</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [featureName](./sdk.erc20batchmintable.featurename.md) |  | "ERC20BatchMintable" |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [to(args)](./sdk.erc20batchmintable.to.md) |  | Mint Tokens To Many Wallets |

