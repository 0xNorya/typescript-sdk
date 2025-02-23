<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [MarketplaceDirect](./sdk.marketplacedirect.md) &gt; [cancelListing](./sdk.marketplacedirect.cancellisting.md)

## MarketplaceDirect.cancelListing() method

Cancel Direct Listing

<b>Signature:</b>

```typescript
cancelListing(listingId: BigNumberish): Promise<TransactionResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  listingId | BigNumberish |  |

<b>Returns:</b>

Promise&lt;[TransactionResult](./sdk.transactionresult.md)<!-- -->&gt;

## Remarks

Cancel a direct listing on the marketplace

## Example


```javascript
// The listing ID of the direct listing you want to cancel
const listingId = "0";

await contract.direct.cancelListing(listingId);
```

