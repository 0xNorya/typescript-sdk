<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [NFTCollection](./sdk.nftcollection.md) &gt; [burnToken](./sdk.nftcollection.burntoken.md)

## NFTCollection.burnToken() method

Burn a single NFT

<b>Signature:</b>

```typescript
burnToken(tokenId: BigNumberish): Promise<TransactionResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  tokenId | BigNumberish | the token Id to burn |

<b>Returns:</b>

Promise&lt;[TransactionResult](./sdk.transactionresult.md)<!-- -->&gt;

## Example


```javascript
const result = await contract.burnToken(tokenId);
```

