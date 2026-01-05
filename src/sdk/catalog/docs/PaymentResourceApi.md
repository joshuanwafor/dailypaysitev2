# PaymentResourceApi

All URIs are relative to *http://177.17.4.12:4172*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBankList**](#getbanklist) | **GET** /api/v1/payment/transfer/bank-list | Get list of banks|
|[**nameEnquiry**](#nameenquiry) | **POST** /api/v1/payment/transfer/name-enquiry | Validate account number and fetch account details|
|[**walletToBankTransfer**](#wallettobanktransfer) | **POST** /api/v1/payment/transfer/wallet-to-bank | Transfer funds from main wallet to bank|

# **getBankList**
> ApiResponseDtoListBank getBankList()

Resource to get list of banks

### Example

```typescript
import {
    PaymentResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentResourceApi(configuration);

const { status, data } = await apiInstance.getBankList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDtoListBank**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Bank list fetched successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **nameEnquiry**
> ApiResponseDtoNameEnquiryDataResponse nameEnquiry(nameEnquiry)

Resource to validate account number and fetch account details

### Example

```typescript
import {
    PaymentResourceApi,
    Configuration,
    NameEnquiry
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentResourceApi(configuration);

let nameEnquiry: NameEnquiry; //

const { status, data } = await apiInstance.nameEnquiry(
    nameEnquiry
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nameEnquiry** | **NameEnquiry**|  | |


### Return type

**ApiResponseDtoNameEnquiryDataResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Name enquiry done successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **walletToBankTransfer**
> ApiResponseDto walletToBankTransfer(walletToBankTransfer)

Resource to transfer funds from main wallet to bank

### Example

```typescript
import {
    PaymentResourceApi,
    Configuration,
    WalletToBankTransfer
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentResourceApi(configuration);

let walletToBankTransfer: WalletToBankTransfer; //

const { status, data } = await apiInstance.walletToBankTransfer(
    walletToBankTransfer
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletToBankTransfer** | **WalletToBankTransfer**|  | |


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
|**200** | Transfer successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

