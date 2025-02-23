<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [DropErc1155ClaimConditions](./sdk.droperc1155claimconditions.md) &gt; [update](./sdk.droperc1155claimconditions.update.md)

## DropErc1155ClaimConditions.update() method

Update a single claim condition with new data.

<b>Signature:</b>

```typescript
update(tokenId: BigNumberish, index: number, claimConditionInput: ClaimConditionInput): Promise<TransactionResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  tokenId | BigNumberish | the token id to update |
|  index | number | the index of the claim condition to update, as given by the index from the result of <code>getAll()</code> |
|  claimConditionInput | [ClaimConditionInput](./sdk.claimconditioninput.md) | the new data to update, previous data will be retained |

<b>Returns:</b>

Promise&lt;[TransactionResult](./sdk.transactionresult.md)<!-- -->&gt;

