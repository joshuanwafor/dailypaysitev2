# DashboardResourceApi

All URIs are relative to *http://177.17.4.12:4172*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDailyPayWalletMetrics**](#getdailypaywalletmetrics) | **GET** /api/v1/dashboard/metrics/dailypay-wallet | Get metrics and analytics for DailyPay wallet|
|[**getMailWalletMetrics**](#getmailwalletmetrics) | **GET** /api/v1/dashboard/metrics/main-wallet | Get metrics and analytics for main wallet|

# **getDailyPayWalletMetrics**
> ApiResponseDtoDailyPayWalletMetrics getDailyPayWalletMetrics()

Resource to metrics and analytics for DailyPay wallet

### Example

```typescript
import {
    DashboardResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardResourceApi(configuration);

const { status, data } = await apiInstance.getDailyPayWalletMetrics();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDtoDailyPayWalletMetrics**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Awesome! Metrics retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMailWalletMetrics**
> ApiResponseDtoMainWalletMetrics getMailWalletMetrics()

Resource to metrics and analytics for main wallet

### Example

```typescript
import {
    DashboardResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardResourceApi(configuration);

const { status, data } = await apiInstance.getMailWalletMetrics();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDtoMainWalletMetrics**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Awesome! Metrics retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

