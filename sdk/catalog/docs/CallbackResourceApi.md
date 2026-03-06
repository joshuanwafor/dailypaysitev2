# CallbackResourceApi

All URIs are relative to *http://dev.api.alerts.africa*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**safeHavenCustomerRedirectUrl**](#safehavencustomerredirecturl) | **POST** /api/v1/callback/safe-haven/customer | Safe Haven customer redirect URL|
|[**safeHavenTransferCallback**](#safehaventransfercallback) | **POST** /api/v1/callback/safe-haven/transfer | Safe Haven bank transfer callback|

# **safeHavenCustomerRedirectUrl**
> ApiResponseDto safeHavenCustomerRedirectUrl(safeHavenTransferCallback)

Resource for Safe Haven customer redirect URL

### Example

```typescript
import {
    CallbackResourceApi,
    Configuration,
    SafeHavenTransferCallback
} from './api';

const configuration = new Configuration();
const apiInstance = new CallbackResourceApi(configuration);

let privateKey: string; //Callback private key (default to undefined)
let userToken: string; //Callback user token (default to undefined)
let channel: string; //Callback channel (default to undefined)
let safeHavenTransferCallback: SafeHavenTransferCallback; //

const { status, data } = await apiInstance.safeHavenCustomerRedirectUrl(
    privateKey,
    userToken,
    channel,
    safeHavenTransferCallback
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **safeHavenTransferCallback** | **SafeHavenTransferCallback**|  | |
| **privateKey** | [**string**] | Callback private key | defaults to undefined|
| **userToken** | [**string**] | Callback user token | defaults to undefined|
| **channel** | [**string**] | Callback channel | defaults to undefined|


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
|**200** | Redirect processed successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **safeHavenTransferCallback**
> ApiResponseDto safeHavenTransferCallback(safeHavenTransferCallback)

Resource for Safe Haven bank transfer callback

### Example

```typescript
import {
    CallbackResourceApi,
    Configuration,
    SafeHavenTransferCallback
} from './api';

const configuration = new Configuration();
const apiInstance = new CallbackResourceApi(configuration);

let privateKey: string; //Callback private key (default to undefined)
let userToken: string; //Callback user token (default to undefined)
let channel: string; //Callback channel (default to undefined)
let safeHavenTransferCallback: SafeHavenTransferCallback; //

const { status, data } = await apiInstance.safeHavenTransferCallback(
    privateKey,
    userToken,
    channel,
    safeHavenTransferCallback
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **safeHavenTransferCallback** | **SafeHavenTransferCallback**|  | |
| **privateKey** | [**string**] | Callback private key | defaults to undefined|
| **userToken** | [**string**] | Callback user token | defaults to undefined|
| **channel** | [**string**] | Callback channel | defaults to undefined|


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
|**200** | Callback processed successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

