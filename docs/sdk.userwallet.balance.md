<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [UserWallet](./sdk.userwallet.md) &gt; [balance](./sdk.userwallet.balance.md)

## UserWallet.balance() method

Fetch the native or ERC20 token balance of this wallet

<b>Signature:</b>

```typescript
balance(currencyAddress?: string): Promise<CurrencyValue>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  currencyAddress | string | <i>(Optional)</i> |

<b>Returns:</b>

Promise&lt;[CurrencyValue](./sdk.currencyvalue.md)<!-- -->&gt;

## Example


```javascript
// native currency balance
const balance = await sdk.wallet.balance();
// ERC20 token balance
const erc20balance = await sdk.wallet.balance(tokenContractAddress);

```

