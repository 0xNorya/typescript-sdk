<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [UserWallet](./sdk.userwallet.md) &gt; [sign](./sdk.userwallet.sign.md)

## UserWallet.sign() method

Sign any message with the connected wallet private key

<b>Signature:</b>

```typescript
sign(message: string): Promise<string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  message | string | the message to sign |

<b>Returns:</b>

Promise&lt;string&gt;

the signed message

## Example


```javascript
// This is the message to be signed
const message = "Sign this message...";

// Now we can sign the message with the connected wallet
const signature = await sdk.wallet.sign(message);
```

