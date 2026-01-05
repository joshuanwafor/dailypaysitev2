# JobResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **string** |  | [optional] [default to undefined]
**organizationType** | **string** |  | [optional] [default to undefined]
**employerName** | **string** |  | [optional] [default to undefined]
**employerPhone** | **string** |  | [optional] [default to undefined]
**employerEmail** | **string** |  | [optional] [default to undefined]
**employerWebsite** | **string** |  | [optional] [default to undefined]
**employerAddress** | [**AddressResponse**](AddressResponse.md) |  | [optional] [default to undefined]
**jobTitle** | **string** |  | [optional] [default to undefined]
**jobRole** | **string** |  | [optional] [default to undefined]
**monthlySalary** | **number** |  | [optional] [default to undefined]
**salaryTimeframe** | **string** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**hrName** | **string** |  | [optional] [default to undefined]
**hrPhone** | **string** |  | [optional] [default to undefined]
**hrEmail** | **string** |  | [optional] [default to undefined]
**emailSentToHr** | **boolean** |  | [optional] [default to undefined]
**emailResendCount** | **number** |  | [optional] [default to undefined]
**hrApproval** | **boolean** |  | [optional] [default to undefined]
**hrApprovalStatus** | **string** |  | [optional] [default to undefined]
**dateApproved** | **string** |  | [optional] [default to undefined]
**hrComment** | **string** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**hrData** | [**HrDataResponse**](HrDataResponse.md) |  | [optional] [default to undefined]
**steps** | [**JobSteps**](JobSteps.md) |  | [optional] [default to undefined]
**bankStatement** | [**BankStatementResponse**](BankStatementResponse.md) |  | [optional] [default to undefined]
**createdDate** | **string** |  | [optional] [default to undefined]
**lastModifiedDate** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { JobResponse } from './api';

const instance: JobResponse = {
    jobId,
    organizationType,
    employerName,
    employerPhone,
    employerEmail,
    employerWebsite,
    employerAddress,
    jobTitle,
    jobRole,
    monthlySalary,
    salaryTimeframe,
    currency,
    hrName,
    hrPhone,
    hrEmail,
    emailSentToHr,
    emailResendCount,
    hrApproval,
    hrApprovalStatus,
    dateApproved,
    hrComment,
    active,
    hrData,
    steps,
    bankStatement,
    createdDate,
    lastModifiedDate,
    lastModifiedBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
