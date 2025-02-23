<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [Erc20](./sdk.erc20.md) &gt; [transferFrom](./sdk.erc20.transferfrom.md)

## Erc20.transferFrom() method

Transfer Tokens From Address

<b>Signature:</b>

```typescript
transferFrom(from: string, to: string, amount: Amount): Promise<TransactionResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  from | string |  |
|  to | string |  |
|  amount | [Amount](./sdk.amount.md) |  |

<b>Returns:</b>

Promise&lt;[TransactionResult](./sdk.transactionresult.md)<!-- -->&gt;

## Remarks

Transfer tokens from one wallet to another

## Example


```javascript
// Address of the wallet sending the tokens
const fromAddress = "{{wallet_address}}";
// Address of the wallet you want to send the tokens to
const toAddress = "0x...";
// The number of tokens you want to send
const amount = 1.2
// Note that the connected wallet must have approval to transfer the tokens of the fromAddress
await contract.token.transferFrom(fromAddress, toAddress, amount);
```

