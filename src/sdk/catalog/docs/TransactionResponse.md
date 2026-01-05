# TransactionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **string** |  | [optional] [default to undefined]
**transactionNo** | **string** |  | [optional] [default to undefined]
**transactionReference** | **string** |  | [optional] [default to undefined]
**transactionDate** | **string** |  | [optional] [default to undefined]
**transactionType** | **string** |  | [optional] [default to undefined]
**paymentType** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**charges** | **number** |  | [optional] [default to undefined]
**totalAmount** | **number** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**channels** | **string** |  | [optional] [default to undefined]
**medium** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**narration** | **string** |  | [optional] [default to undefined]
**remark** | **string** |  | [optional] [default to undefined]
**category** | **string** |  | [optional] [default to undefined]
**balanceBefore** | **number** |  | [optional] [default to undefined]
**balanceAfter** | **number** |  | [optional] [default to undefined]
**senderDetails** | [**PayerDetails**](PayerDetails.md) |  | [optional] [default to undefined]
**recipientDetails** | [**PayerDetails**](PayerDetails.md) |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**createdDate** | **string** |  | [optional] [default to undefined]
**lastModifiedDate** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TransactionResponse } from './api';

const instance: TransactionResponse = {
    transactionId,
    transactionNo,
    transactionReference,
    transactionDate,
    transactionType,
    paymentType,
    amount,
    charges,
    totalAmount,
    currency,
    channels,
    medium,
    description,
    narration,
    remark,
    category,
    balanceBefore,
    balanceAfter,
    senderDetails,
    recipientDetails,
    status,
    createdDate,
    lastModifiedDate,
    lastModifiedBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
