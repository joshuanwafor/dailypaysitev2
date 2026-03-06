# WalletResourceApi

All URIs are relative to *http://dev.api.alerts.africa*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveMainWalletInfo**](#retrievemainwalletinfo) | **GET** /api/v1/wallet/main | Retrieve user main wallet information|

# **retrieveMainWalletInfo**
> ApiResponseDtoWalletResponse retrieveMainWalletInfo()

Resource to retrieve user main wallet information

### Example

```typescript
import {
    WalletResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WalletResourceApi(configuration);

const { status, data } = await apiInstance.retrieveMainWalletInfo();
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

