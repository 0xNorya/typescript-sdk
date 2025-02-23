<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [TokenDrop](./sdk.tokendrop.md) &gt; [claim](./sdk.tokendrop.claim.md)

## TokenDrop.claim() method

Claim a certain amount of tokens

<b>Signature:</b>

```typescript
claim(amount: Amount, checkERC20Allowance?: boolean): Promise<TransactionResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Amount](./sdk.amount.md) | the amount of tokens to mint |
|  checkERC20Allowance | boolean | <i>(Optional)</i> Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer |

<b>Returns:</b>

Promise&lt;[TransactionResult](./sdk.transactionresult.md)<!-- -->&gt;

## Remarks

See [TokenDrop.claimTo()](./sdk.tokendrop.claimto.md)

