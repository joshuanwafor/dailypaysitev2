# SigninResourceApi

All URIs are relative to *http://177.17.4.12:4172*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**completePasswordResetLink**](#completepasswordresetlink) | **POST** /api/v1/signin/reset-password/link/complete | Complete password reset with link|
|[**completePasswordResetOTP**](#completepasswordresetotp) | **POST** /api/v1/signin/reset-password/otp/complete | Complete password reset with OTP|
|[**resetPasswordLink**](#resetpasswordlink) | **POST** /api/v1/signin/reset-password/link/initiate | Reset password with link|
|[**resetPasswordOtp**](#resetpasswordotp) | **POST** /api/v1/signin/reset-password/otp/initiate | Reset password with OTP|
|[**signIn**](#signin) | **POST** /api/v1/signin | Signin|

# **completePasswordResetLink**
> ApiResponseDto completePasswordResetLink(completePasswordResetLink)

Resource to complete password reset with link

### Example

```typescript
import {
    SigninResourceApi,
    Configuration,
    CompletePasswordResetLink
} from './api';

const configuration = new Configuration();
const apiInstance = new SigninResourceApi(configuration);

let completePasswordResetLink: CompletePasswordResetLink; //

const { status, data } = await apiInstance.completePasswordResetLink(
    completePasswordResetLink
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **completePasswordResetLink** | **CompletePasswordResetLink**|  | |


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
|**200** | Password reset successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **completePasswordResetOTP**
> ApiResponseDto completePasswordResetOTP(completePasswordResetOtp)

Resource to complete password reset with OTP

### Example

```typescript
import {
    SigninResourceApi,
    Configuration,
    CompletePasswordResetOtp
} from './api';

const configuration = new Configuration();
const apiInstance = new SigninResourceApi(configuration);

let completePasswordResetOtp: CompletePasswordResetOtp; //

const { status, data } = await apiInstance.completePasswordResetOTP(
    completePasswordResetOtp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **completePasswordResetOtp** | **CompletePasswordResetOtp**|  | |


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
|**200** | Password reset successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetPasswordLink**
> ApiResponseDto resetPasswordLink(initiateResetPassword)

Resource to reset password with link

### Example

```typescript
import {
    SigninResourceApi,
    Configuration,
    InitiateResetPassword
} from './api';

const configuration = new Configuration();
const apiInstance = new SigninResourceApi(configuration);

let initiateResetPassword: InitiateResetPassword; //

const { status, data } = await apiInstance.resetPasswordLink(
    initiateResetPassword
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiateResetPassword** | **InitiateResetPassword**|  | |


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
|**200** | Password reset initiated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetPasswordOtp**
> ApiResponseDto resetPasswordOtp(initiateResetPassword)

Resource to reset password with OTP

### Example

```typescript
import {
    SigninResourceApi,
    Configuration,
    InitiateResetPassword
} from './api';

const configuration = new Configuration();
const apiInstance = new SigninResourceApi(configuration);

let initiateResetPassword: InitiateResetPassword; //

const { status, data } = await apiInstance.resetPasswordOtp(
    initiateResetPassword
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiateResetPassword** | **InitiateResetPassword**|  | |


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
|**200** | Password reset initiated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signIn**
> ApiResponseDtoSignInResponse signIn(credentials)

Resource to signin

### Example

```typescript
import {
    SigninResourceApi,
    Configuration,
    Credentials
} from './api';

const configuration = new Configuration();
const apiInstance = new SigninResourceApi(configuration);

let credentials: Credentials; //

const { status, data } = await apiInstance.signIn(
    credentials
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **credentials** | **Credentials**|  | |


### Return type

**ApiResponseDtoSignInResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User signin successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

