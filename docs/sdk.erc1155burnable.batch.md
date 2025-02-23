<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [Erc1155Burnable](./sdk.erc1155burnable.md) &gt; [batch](./sdk.erc1155burnable.batch.md)

## Erc1155Burnable.batch() method

Burn a batch of NFTs

<b>Signature:</b>

```typescript
batch(tokenIds: BigNumberish[], amounts: BigNumberish[]): Promise<TransactionResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  tokenIds | BigNumberish\[\] | the tokenIds to burn |
|  amounts | BigNumberish\[\] | amount of each token to burn |

<b>Returns:</b>

Promise&lt;[TransactionResult](./sdk.transactionresult.md)<!-- -->&gt;

## Remarks

Burn the batch NFTs from the connected wallet

## Example


```javascript
// The token IDs to burn NFTs of
const tokenIds = [0, 1];
// The amounts of each NFT you want to burn
const amounts = [2, 2];

const result = await contract.edition.burn.batch(tokenIds, amounts);
```

