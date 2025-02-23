<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [ContractPlatformFee](./sdk.contractplatformfee.md)

## ContractPlatformFee class

Handle platform fees and recipients

<b>Signature:</b>

```typescript
export declare class ContractPlatformFee<TContract extends IPlatformFee> implements DetectableFeature 
```
<b>Implements:</b> DetectableFeature

## Remarks

Configure platform fees for a contract, which can be applied on certain paid transactions

## Example


```javascript
const contract = await sdk.getContract("{{contract_address}}");
const feeInfo = await contract.platformFee.get();
await contract.platformFee.set({
  platform_fee_basis_points: 100, // 1% fee
  platform_fee_recipient: "0x..." // the fee recipient
})
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(contractWrapper)](./sdk.contractplatformfee._constructor_.md) |  | Constructs a new instance of the <code>ContractPlatformFee</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [featureName](./sdk.contractplatformfee.featurename.md) |  | "PlatformFee" |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [get()](./sdk.contractplatformfee.get.md) |  | Get the platform fee recipient and basis points |
|  [set(platformFeeInfo)](./sdk.contractplatformfee.set.md) |  | Set the platform fee recipient and basis points |

