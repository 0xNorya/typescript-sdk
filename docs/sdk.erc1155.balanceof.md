<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [Erc1155](./sdk.erc1155.md) &gt; [balanceOf](./sdk.erc1155.balanceof.md)

## Erc1155.balanceOf() method

Get NFT Balance

<b>Signature:</b>

```typescript
balanceOf(address: string, tokenId: BigNumberish): Promise<BigNumber>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  address | string |  |
|  tokenId | BigNumberish |  |

<b>Returns:</b>

Promise&lt;BigNumber&gt;

## Remarks

Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).

## Example


```javascript
// Address of the wallet to check NFT balance
const walletAddress = "{{wallet_address}}";
const tokenId = 0; // Id of the NFT to check
const balance = await contract.balanceOf(walletAddress, tokenId);
```

