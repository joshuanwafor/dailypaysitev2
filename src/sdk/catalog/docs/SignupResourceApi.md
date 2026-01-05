# SignupResourceApi

All URIs are relative to *http://177.17.4.12:4172*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sendOTP**](#sendotp) | **POST** /api/v1/signup/send-otp | Send OTP|
|[**signUp**](#signup) | **POST** /api/v1/signup | Register new user|
|[**verifyEmail**](#verifyemail) | **GET** /api/v1/signup/verify-email | Verify email|
|[**verifyOTP**](#verifyotp) | **POST** /api/v1/signup/verify-otp | Verify OTP|

# **sendOTP**
> ApiResponseDto sendOTP(sendOTPRequest)

Resource to send OTP

### Example

```typescript
import {
    SignupResourceApi,
    Configuration,
    SendOTPRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SignupResourceApi(configuration);

let sendOTPRequest: SendOTPRequest; //

const { status, data } = await apiInstance.sendOTP(
    sendOTPRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendOTPRequest** | **SendOTPRequest**|  | |


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

# **signUp**
> ApiResponseDto signUp(signUpRequest)

Resource to register new user

### Example

```typescript
import {
    SignupResourceApi,
    Configuration,
    SignUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SignupResourceApi(configuration);

let signUpRequest: SignUpRequest; //

const { status, data } = await apiInstance.signUp(
    signUpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signUpRequest** | **SignUpRequest**|  | |


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
|**200** | User registered successfully |  -  |
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyEmail**
> ApiResponseDto verifyEmail()

Resource to verify email

### Example

```typescript
import {
    SignupResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SignupResourceApi(configuration);

let email: string; //Email to verify (default to undefined)

const { status, data } = await apiInstance.verifyEmail(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | Email to verify | defaults to undefined|


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
|**200** | Email verified successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyOTP**
> ApiResponseDto verifyOTP(verifyOTPRequest)

Resource to verify OTP

### Example

```typescript
import {
    SignupResourceApi,
    Configuration,
    VerifyOTPRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SignupResourceApi(configuration);

let verifyOTPRequest: VerifyOTPRequest; //

const { status, data } = await apiInstance.verifyOTP(
    verifyOTPRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyOTPRequest** | **VerifyOTPRequest**|  | |


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
|**200** | OTP verified successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

