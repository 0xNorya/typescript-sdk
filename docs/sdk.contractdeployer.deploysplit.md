<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@daply/sdk](./sdk.md) &gt; [ContractDeployer](./sdk.contractdeployer.md) &gt; [deploySplit](./sdk.contractdeployer.deploysplit.md)

## ContractDeployer.deploySplit() method

Deploys a new Split contract

<b>Signature:</b>

```typescript
deploySplit(metadata: SplitContractDeployMetadata): Promise<string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  metadata | [SplitContractDeployMetadata](./sdk.splitcontractdeploymetadata.md) | the contract metadata |

<b>Returns:</b>

Promise&lt;string&gt;

the address of the deployed contract

## Remarks

Deploys a Split contract and returns the address of the deployed contract

## Example


```javascript
const contractAddress = await sdk.deployer.deploySplit({
  name: "My Split",
  primary_sale_recipient: "your-address",
  recipients: [
   {
     address: "your-address",
     sharesBps: 80 * 100, // 80%
   },
   {
     address: "another-address",
     sharesBps: 20 * 100, // 20%
   },
  ],
});
```

