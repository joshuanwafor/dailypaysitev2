# AccountNumberResourceApi

All URIs are relative to *http://dev.api.alerts.africa*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**completeRubiesVirtualAccountCreation**](#completerubiesvirtualaccountcreation) | **POST** /api/v1/account/create-account/complete | Complete account creation|
|[**initiateRubiesVirtualAccountCreation**](#initiaterubiesvirtualaccountcreation) | **POST** /api/v1/account/create-account/initiate | Initiate account creation|
|[**resendOtpForRubiesVirtualAccountCreation**](#resendotpforrubiesvirtualaccountcreation) | **POST** /api/v1/account/create-account/resend-otp | Resend OTP for account creation|

# **completeRubiesVirtualAccountCreation**
> ApiResponseDto completeRubiesVirtualAccountCreation(completeVirtualAccountCreation)

Resource to complete account creation

### Example

```typescript
import {
    AccountNumberResourceApi,
    Configuration,
    CompleteVirtualAccountCreation
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountNumberResourceApi(configuration);

let completeVirtualAccountCreation: CompleteVirtualAccountCreation; //

const { status, data } = await apiInstance.completeRubiesVirtualAccountCreation(
    completeVirtualAccountCreation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **completeVirtualAccountCreation** | **CompleteVirtualAccountCreation**|  | |


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
|**200** | Account number created successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiateRubiesVirtualAccountCreation**
> ApiResponseDto initiateRubiesVirtualAccountCreation()

Resource to initiate account creation

### Example

```typescript
import {
    AccountNumberResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountNumberResourceApi(configuration);

const { status, data } = await apiInstance.initiateRubiesVirtualAccountCreation();
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
|**200** | OTP sent successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendOtpForRubiesVirtualAccountCreation**
> ApiResponseDto resendOtpForRubiesVirtualAccountCreation(resendOtpForVirtualAccountCreation)

Resource to resend OTP for account creation

### Example

```typescript
import {
    AccountNumberResourceApi,
    Configuration,
    ResendOtpForVirtualAccountCreation
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountNumberResourceApi(configuration);

let resendOtpForVirtualAccountCreation: ResendOtpForVirtualAccountCreation; //

const { status, data } = await apiInstance.resendOtpForRubiesVirtualAccountCreation(
    resendOtpForVirtualAccountCreation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resendOtpForVirtualAccountCreation** | **ResendOtpForVirtualAccountCreation**|  | |


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
|**200** | OTP sent successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

