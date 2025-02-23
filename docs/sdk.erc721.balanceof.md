<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [Erc721](./sdk.erc721.md) &gt; [balanceOf](./sdk.erc721.balanceof.md)

## Erc721.balanceOf() method

Get NFT Balance

<b>Signature:</b>

```typescript
balanceOf(address: string): Promise<BigNumber>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  address | string |  |

<b>Returns:</b>

Promise&lt;BigNumber&gt;

## Remarks

Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).

## Example


```javascript
const walletAddress = "{{wallet_address}}";
const balance = await contract.nft.balanceOf(walletAddress);
console.log(balance);
```

