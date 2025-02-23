<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [WalletAuthenticator](./sdk.walletauthenticator.md)

## WalletAuthenticator class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Wallet Authenticator

<b>Signature:</b>

```typescript
export declare class WalletAuthenticator extends RPCConnectionHandler 
```
<b>Extends:</b> RPCConnectionHandler

## Remarks

The wallet authenticator enables server-side applications to securely identify the connected wallet address of users on the client-side, and also enables users to authenticate to any backend using just their wallet. It implements the JSON Web Token (JWT) authentication standard.

## Example


```javascript
// We specify the domain of the application to authenticate to
const domain = "thirdweb.com"

// On the client side, we can generate a payload for the connected wallet to login
const loginPayload = await sdk.auth.login(domain);

// Then on the server side, we can securely verify the connected client-side address
const address = sdk.auth.verify(domain, loginPayload);

// And we can also generate an authentication token to send to the client
const token = sdk.auth.generate(domain, loginPayload);

// Finally, the token can be send from the client to the server to make authenticated requests
// And the server can use the following function to authenticate a token and verify the associated address
const address = sdk.auth.authenticate(domain, token);
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(network, wallet, options)](./sdk.walletauthenticator._constructor_.md) |  | <b><i>(BETA)</i></b> Constructs a new instance of the <code>WalletAuthenticator</code> class |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [authenticate(domain, token)](./sdk.walletauthenticator.authenticate.md) |  | <b><i>(BETA)</i></b> Authenticate With Token |
|  [generateAuthToken(domain, payload, options)](./sdk.walletauthenticator.generateauthtoken.md) |  | <b><i>(BETA)</i></b> Generate Authentication Token |
|  [login(domain, options)](./sdk.walletauthenticator.login.md) |  | <b><i>(BETA)</i></b> Login With Connected Wallet |
|  [verify(domain, payload, options)](./sdk.walletauthenticator.verify.md) |  | <b><i>(BETA)</i></b> Verify Logged In Address |

