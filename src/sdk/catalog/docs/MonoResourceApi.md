# MonoResourceApi

All URIs are relative to *http://177.17.4.12:4172*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAverageMonthlyIncome**](#getaveragemonthlyincome) | **POST** /api/v1/mono/avg-monthly-income | Get average monthly income|
|[**getDailyPayWalletMetrics**](#getdailypaywalletmetrics) | **GET** /api/v1/dashboard/metrics/dailypay-wallet | Get metrics and analytics for DailyPay wallet|
|[**getMailWalletMetrics**](#getmailwalletmetrics) | **GET** /api/v1/dashboard/metrics/main-wallet | Get metrics and analytics for main wallet|
|[**getStatementRecord**](#getstatementrecord) | **POST** /api/v1/mono/statement | Get account statement records|
|[**getTransactionsRecord**](#gettransactionsrecord) | **POST** /api/v1/mono/transaction | Get account transactions records|

# **getAverageMonthlyIncome**
> ApiResponseDto getAverageMonthlyIncome()

Resource to get average monthly income

### Example

```typescript
import {
    MonoResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MonoResourceApi(configuration);

let accountId: string; //Mono account id (default to undefined)

const { status, data } = await apiInstance.getAverageMonthlyIncome(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Mono account id | defaults to undefined|


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
|**200** | Awesome! Average monthly income retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDailyPayWalletMetrics**
> ApiResponseDtoDailyPayWalletMetrics getDailyPayWalletMetrics()

Resource to metrics and analytics for DailyPay wallet

### Example

```typescript
import {
    MonoResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MonoResourceApi(configuration);

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
    MonoResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MonoResourceApi(configuration);

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

# **getStatementRecord**
> ApiResponseDto getStatementRecord()

Resource to get account statement records

### Example

```typescript
import {
    MonoResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MonoResourceApi(configuration);

let accountId: string; //Mono account id (default to undefined)

const { status, data } = await apiInstance.getStatementRecord(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Mono account id | defaults to undefined|


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
|**200** | Awesome! Statement retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTransactionsRecord**
> ApiResponseDto getTransactionsRecord()

Resource to get account transactions records

### Example

```typescript
import {
    MonoResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MonoResourceApi(configuration);

let accountId: string; //Mono account id (default to undefined)

const { status, data } = await apiInstance.getTransactionsRecord(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Mono account id | defaults to undefined|


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
|**200** | Awesome! Transactions retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

