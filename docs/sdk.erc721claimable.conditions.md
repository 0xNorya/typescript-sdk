<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [Erc721Claimable](./sdk.erc721claimable.md) &gt; [conditions](./sdk.erc721claimable.conditions.md)

## Erc721Claimable.conditions property

Configure claim conditions

<b>Signature:</b>

```typescript
conditions: DropClaimConditions<BaseClaimConditionERC721>;
```

## Remarks

Define who can claim NFTs in the collection, when and how many.

## Example


```javascript
const presaleStartTime = new Date();
const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
const claimConditions = [
  {
    startTime: presaleStartTime, // start the presale now
    maxQuantity: 2, // limit how many mints for this presale
    price: 0.01, // presale price
    snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
  },
  {
    startTime: publicSaleStartTime, // 24h after presale, start public sale
    price: 0.08, // public sale price
  }
]);
await contract.nft.drop.claim.conditions.set(claimConditions);
```

