# DailypayResourceApi

All URIs are relative to *http://177.17.4.12:4172*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activateDailyPay**](#activatedailypay) | **POST** /api/v1/dailypay/activate | Activate DailyPay|
|[**addJobProfile**](#addjobprofile) | **POST** /api/v1/dailypay/job-setup/step1/add-job-profile | Add DailyPay job profile - step 1|
|[**approveMandateRequest**](#approvemandaterequest) | **POST** /api/v1/dailypay/job-setup/step4/approve-mandate | Approve salary mandate request|
|[**claimDailyPay**](#claimdailypay) | **POST** /api/v1/dailypay/claim | Claim DailyPay money credited to DailyPay wallet|
|[**deactivateDailyPay**](#deactivatedailypay) | **POST** /api/v1/dailypay/deactivate | Deactivate DailyPay|
|[**declineMandateRequest**](#declinemandaterequest) | **POST** /api/v1/dailypay/job-setup/step4/decline-mandate | Decline salary mandate request|
|[**getJobDetails**](#getjobdetails) | **GET** /api/v1/dailypay/job-details | Retrieve linked job details|
|[**linkJobSalaryAccount**](#linkjobsalaryaccount) | **POST** /api/v1/dailypay/job-setup/step2/link-salary-account | Link salary account with Mono|
|[**resendMandateEmailToHr**](#resendmandateemailtohr) | **POST** /api/v1/dailypay/job-setup/step3/resend-mandate-email | Resend mandate review request email|
|[**retrieveDailyPayWalletInfo**](#retrievedailypaywalletinfo) | **GET** /api/v1/dailypay/wallet | Retrieve user DailyPay wallet information|
|[**sendMandateReviewRequestToHr**](#sendmandatereviewrequesttohr) | **POST** /api/v1/dailypay/job-setup/step3/mandate-review-request | Send mandate review request to HR - step 3|
|[**unlinkJobSalaryAccount**](#unlinkjobsalaryaccount) | **POST** /api/v1/dailypay/job-setup/step2/unlink-salary-account | Unlink salary account from Mono|
|[**updateJobProfile**](#updatejobprofile) | **PUT** /api/v1/dailypay/job-setup/step1/update-job-profile | Update DailyPay job profile - step 1|
|[**uploadBankStatementOfJobSalaryAccount**](#uploadbankstatementofjobsalaryaccount) | **POST** /api/v1/dailypay/job-setup/step2/upload-bank-statement | Upload salary account 6 months bank statement|
|[**validateHrEmail**](#validatehremail) | **POST** /api/v1/dailypay/job-setup/step3/validate-hr-email | Validate HR email|

# **activateDailyPay**
> ApiResponseDtoWalletResponse activateDailyPay()

Resource to activate DailyPay

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

const { status, data } = await apiInstance.activateDailyPay();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDtoWalletResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | DailyPay activated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addJobProfile**
> ApiResponseDtoJobResponse addJobProfile(dailyPayJobStep1)

Resource to Add DailyPay job profile - step 1

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration,
    DailyPayJobStep1
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

let dailyPayJobStep1: DailyPayJobStep1; //

const { status, data } = await apiInstance.addJobProfile(
    dailyPayJobStep1
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dailyPayJobStep1** | **DailyPayJobStep1**|  | |


### Return type

**ApiResponseDtoJobResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | DailyPay job profile added successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **approveMandateRequest**
> ApiResponseDto approveMandateRequest(dailyPayJobStep4ApproveMandate)

Resource to approve salary mandate request

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration,
    DailyPayJobStep4ApproveMandate
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

let dailyPayJobStep4ApproveMandate: DailyPayJobStep4ApproveMandate; //

const { status, data } = await apiInstance.approveMandateRequest(
    dailyPayJobStep4ApproveMandate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dailyPayJobStep4ApproveMandate** | **DailyPayJobStep4ApproveMandate**|  | |


### Return type

**ApiResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Mandate request approved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **claimDailyPay**
> ApiResponseDto claimDailyPay(claimDailyPay)

Resource to claim DailyPay money credited to DailyPay wallet

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration,
    ClaimDailyPay
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

let claimDailyPay: ClaimDailyPay; //

const { status, data } = await apiInstance.claimDailyPay(
    claimDailyPay
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **claimDailyPay** | **ClaimDailyPay**|  | |


### Return type

**ApiResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Claim Processed successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivateDailyPay**
> ApiResponseDto deactivateDailyPay()

Resource to deactivate DailyPay

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

const { status, data } = await apiInstance.deactivateDailyPay();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | DailyPay deactivated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **declineMandateRequest**
> ApiResponseDto declineMandateRequest(dailyPayJobStep4DeclineMandate)

Resource to decline salary mandate request

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration,
    DailyPayJobStep4DeclineMandate
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

let dailyPayJobStep4DeclineMandate: DailyPayJobStep4DeclineMandate; //

const { status, data } = await apiInstance.declineMandateRequest(
    dailyPayJobStep4DeclineMandate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dailyPayJobStep4DeclineMandate** | **DailyPayJobStep4DeclineMandate**|  | |


### Return type

**ApiResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Mandate request declined successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getJobDetails**
> ApiResponseDtoJobResponse getJobDetails()

Resource to retrieve linked job details

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

const { status, data } = await apiInstance.getJobDetails();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDtoJobResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Job details retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **linkJobSalaryAccount**
> ApiResponseDtoJobResponse linkJobSalaryAccount(dailyPayJobStep2)

Resource to link salary account with Mono

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration,
    DailyPayJobStep2
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

let dailyPayJobStep2: DailyPayJobStep2; //

const { status, data } = await apiInstance.linkJobSalaryAccount(
    dailyPayJobStep2
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dailyPayJobStep2** | **DailyPayJobStep2**|  | |


### Return type

**ApiResponseDtoJobResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Salary account linked successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendMandateEmailToHr**
> ApiResponseDtoJobResponse resendMandateEmailToHr()

Resource to resend mandate review request email

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

const { status, data } = await apiInstance.resendMandateEmailToHr();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDtoJobResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Email resent to HR successfully! |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveDailyPayWalletInfo**
> ApiResponseDtoWalletResponse retrieveDailyPayWalletInfo()

Resource to retrieve user DailyPay wallet information

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

const { status, data } = await apiInstance.retrieveDailyPayWalletInfo();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDtoWalletResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Wallet info retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendMandateReviewRequestToHr**
> ApiResponseDtoJobResponse sendMandateReviewRequestToHr(dailyPayJobStep3)

Resource to send mandate review request to HR - step 3

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration,
    DailyPayJobStep3
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

let dailyPayJobStep3: DailyPayJobStep3; //

const { status, data } = await apiInstance.sendMandateReviewRequestToHr(
    dailyPayJobStep3
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dailyPayJobStep3** | **DailyPayJobStep3**|  | |


### Return type

**ApiResponseDtoJobResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Email sent to HR successfully! |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlinkJobSalaryAccount**
> ApiResponseDto unlinkJobSalaryAccount()

Resource to unlink salary account from Mono

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

const { status, data } = await apiInstance.unlinkJobSalaryAccount();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Salary account linked successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateJobProfile**
> ApiResponseDtoJobResponse updateJobProfile(dailyPayJobStep1)

Resource to update DailyPay job profile - step 1

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration,
    DailyPayJobStep1
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

let dailyPayJobStep1: DailyPayJobStep1; //

const { status, data } = await apiInstance.updateJobProfile(
    dailyPayJobStep1
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dailyPayJobStep1** | **DailyPayJobStep1**|  | |


### Return type

**ApiResponseDtoJobResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | DailyPay job profile updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadBankStatementOfJobSalaryAccount**
> ApiResponseDtoJobResponse uploadBankStatementOfJobSalaryAccount()

Resource to upload salary account 6 months bank statement

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

let bankName: string; //Salary bank name (default to undefined)
let accountName: string; //Salary account name (default to undefined)
let accountNumber: string; //Salary account number (default to undefined)
let file: File; //Bank statement PDF file (default to undefined)

const { status, data } = await apiInstance.uploadBankStatementOfJobSalaryAccount(
    bankName,
    accountName,
    accountNumber,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bankName** | [**string**] | Salary bank name | defaults to undefined|
| **accountName** | [**string**] | Salary account name | defaults to undefined|
| **accountNumber** | [**string**] | Salary account number | defaults to undefined|
| **file** | [**File**] | Bank statement PDF file | defaults to undefined|


### Return type

**ApiResponseDtoJobResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Bank statement uploaded successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateHrEmail**
> ApiResponseDtoValidateHrEmailResponse validateHrEmail(validateHrEmailRequest)

Resource to validate HR email

### Example

```typescript
import {
    DailypayResourceApi,
    Configuration,
    ValidateHrEmailRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DailypayResourceApi(configuration);

let validateHrEmailRequest: ValidateHrEmailRequest; //

const { status, data } = await apiInstance.validateHrEmail(
    validateHrEmailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validateHrEmailRequest** | **ValidateHrEmailRequest**|  | |


### Return type

**ApiResponseDtoValidateHrEmailResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | HR email validated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

