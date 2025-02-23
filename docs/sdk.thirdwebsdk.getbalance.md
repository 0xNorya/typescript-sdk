<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [ThirdwebSDK](./sdk.thirdwebsdk.md) &gt; [getBalance](./sdk.thirdwebsdk.getbalance.md)

## ThirdwebSDK.getBalance() method

Get the native balance of a given address (wallet or contract)

<b>Signature:</b>

```typescript
getBalance(address: string): Promise<CurrencyValue>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  address | string | the address to check the balance for |

<b>Returns:</b>

Promise&lt;[CurrencyValue](./sdk.currencyvalue.md)<!-- -->&gt;

## Example


```javascript
const balance = await sdk.getBalance("0x...");
console.log(balance.displayValue);
```

