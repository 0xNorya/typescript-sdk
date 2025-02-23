<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [MarketplaceDirect](./sdk.marketplacedirect.md) &gt; [createListing](./sdk.marketplacedirect.createlisting.md)

## MarketplaceDirect.createListing() method

Create Direct Listing

<b>Signature:</b>

```typescript
createListing(listing: NewDirectListing): Promise<TransactionResultWithId>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  listing | [NewDirectListing](./sdk.newdirectlisting.md) |  |

<b>Returns:</b>

Promise&lt;[TransactionResultWithId](./sdk.transactionresultwithid.md)<!-- -->&gt;

## Remarks

Create a new listing on the marketplace where people can buy an asset directly.

## Example


```javascript
// Data of the listing you want to create
const listing = {
  // address of the contract the asset you want to list is on
  assetContractAddress: "0x...",
  // token ID of the asset you want to list
  tokenId: "0",
  // when should the listing open up for offers
  startTimestamp: new Date(),
  // how long the listing will be open for
  listingDurationInSeconds: 86400,
  // how many of the asset you want to list
  quantity: 1,
  // address of the currency contract that will be used to pay for the listing
  currencyContractAddress: NATIVE_TOKEN_ADDRESS,
  // how much the asset will be sold for
  buyoutPricePerToken: "1.5",
}

const tx = await contract.direct.createListing(listing);
const receipt = tx.receipt; // the transaction receipt
const id = tx.id; // the id of the newly created listing
```

