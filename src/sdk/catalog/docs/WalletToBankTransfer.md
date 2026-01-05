# WalletToBankTransfer

Transfer payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionPin** | **string** |  | [default to undefined]
**nameEnquirySessionId** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**recipientBankName** | **string** |  | [default to undefined]
**recipientAccountName** | **string** |  | [default to undefined]
**recipientBankCode** | **string** |  | [default to undefined]
**recipientAccountNumber** | **string** |  | [default to undefined]
**category** | **string** |  | [optional] [default to undefined]
**narration** | **string** |  | [optional] [default to undefined]
**saveBeneficiary** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { WalletToBankTransfer } from './api';

const instance: WalletToBankTransfer = {
    transactionPin,
    nameEnquirySessionId,
    amount,
    recipientBankName,
    recipientAccountName,
    recipientBankCode,
    recipientAccountNumber,
    category,
    narration,
    saveBeneficiary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
