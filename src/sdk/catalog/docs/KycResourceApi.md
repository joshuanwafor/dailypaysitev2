# KycResourceApi

All URIs are relative to *http://177.17.4.12:4172*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**completeBvnVerification**](#completebvnverification) | **POST** /api/v1/kyc/verification/bvn/complete | Complete BVN verification|
|[**completeNinVerification**](#completeninverification) | **POST** /api/v1/kyc/verification/nin/complete | Complete NIN verification|
|[**getKyc**](#getkyc) | **GET** /api/v1/kyc | Retrieve user KYC data|
|[**getKycStatus**](#getkycstatus) | **GET** /api/v1/kyc/status | Retrieve user KYC status|
|[**initiateBvnVerification**](#initiatebvnverification) | **POST** /api/v1/kyc/verification/bvn/initiate | Initiate BVN verification|
|[**initiateNinVerification**](#initiateninverification) | **POST** /api/v1/kyc/verification/nin/initiate | Initiate NIN verification|
|[**resendBvnOtp**](#resendbvnotp) | **POST** /api/v1/kyc/verification/bvn/resend-otp | Resend BVN OTP|
|[**resendNinOtp**](#resendninotp) | **POST** /api/v1/kyc/verification/nin/resend-otp | Resend NIN OTP|

# **completeBvnVerification**
> ApiResponseDto completeBvnVerification(bvnVerifyOtp)

Resource to complete BVN verification

### Example

```typescript
import {
    KycResourceApi,
    Configuration,
    BvnVerifyOtp
} from './api';

const configuration = new Configuration();
const apiInstance = new KycResourceApi(configuration);

let bvnVerifyOtp: BvnVerifyOtp; //

const { status, data } = await apiInstance.completeBvnVerification(
    bvnVerifyOtp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bvnVerifyOtp** | **BvnVerifyOtp**|  | |


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
|**200** | BVN verified successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **completeNinVerification**
> ApiResponseDto completeNinVerification(ninVerifyOtp)

Resource to complete NIN verification

### Example

```typescript
import {
    KycResourceApi,
    Configuration,
    NinVerifyOtp
} from './api';

const configuration = new Configuration();
const apiInstance = new KycResourceApi(configuration);

let ninVerifyOtp: NinVerifyOtp; //

const { status, data } = await apiInstance.completeNinVerification(
    ninVerifyOtp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ninVerifyOtp** | **NinVerifyOtp**|  | |


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
|**200** | NIN Verified successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getKyc**
> ApiResponseDtoKycResponse getKyc()

Resource to retrieve user KYC data

### Example

```typescript
import {
    KycResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KycResourceApi(configuration);

const { status, data } = await apiInstance.getKyc();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDtoKycResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User KYC data retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getKycStatus**
> ApiResponseDtoKycStatusResponse getKycStatus()

Resource to retrieve user KYC status

### Example

```typescript
import {
    KycResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KycResourceApi(configuration);

const { status, data } = await apiInstance.getKycStatus();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDtoKycStatusResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User KYC status retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiateBvnVerification**
> ApiResponseDtoBvnVerificationResponse initiateBvnVerification(bvnCheck)

Resource to initiate BVN verification

### Example

```typescript
import {
    KycResourceApi,
    Configuration,
    BvnCheck
} from './api';

const configuration = new Configuration();
const apiInstance = new KycResourceApi(configuration);

let bvnCheck: BvnCheck; //

const { status, data } = await apiInstance.initiateBvnVerification(
    bvnCheck
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bvnCheck** | **BvnCheck**|  | |


### Return type

**ApiResponseDtoBvnVerificationResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | BVN verification initiated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiateNinVerification**
> ApiResponseDtoNinVerificationResponse initiateNinVerification(ninCheck)

Resource to initiate NIN verification

### Example

```typescript
import {
    KycResourceApi,
    Configuration,
    NinCheck
} from './api';

const configuration = new Configuration();
const apiInstance = new KycResourceApi(configuration);

let ninCheck: NinCheck; //

const { status, data } = await apiInstance.initiateNinVerification(
    ninCheck
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ninCheck** | **NinCheck**|  | |


### Return type

**ApiResponseDtoNinVerificationResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | NIN verification initiated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendBvnOtp**
> ApiResponseDtoBvnVerificationResponse resendBvnOtp(resendBvnOtp)

Resource to resend BVN OTP

### Example

```typescript
import {
    KycResourceApi,
    Configuration,
    ResendBvnOtp
} from './api';

const configuration = new Configuration();
const apiInstance = new KycResourceApi(configuration);

let resendBvnOtp: ResendBvnOtp; //

const { status, data } = await apiInstance.resendBvnOtp(
    resendBvnOtp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resendBvnOtp** | **ResendBvnOtp**|  | |


### Return type

**ApiResponseDtoBvnVerificationResponse**

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

# **resendNinOtp**
> ApiResponseDtoNinVerificationResponse resendNinOtp(resendNinOtp)

Resource to resend NIN OTP

### Example

```typescript
import {
    KycResourceApi,
    Configuration,
    ResendNinOtp
} from './api';

const configuration = new Configuration();
const apiInstance = new KycResourceApi(configuration);

let resendNinOtp: ResendNinOtp; //

const { status, data } = await apiInstance.resendNinOtp(
    resendNinOtp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resendNinOtp** | **ResendNinOtp**|  | |


### Return type

**ApiResponseDtoNinVerificationResponse**

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

