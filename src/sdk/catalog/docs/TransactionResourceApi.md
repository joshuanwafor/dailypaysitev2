# TransactionResourceApi

All URIs are relative to *http://177.17.4.12:4172*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadTransactionReceiptById**](#downloadtransactionreceiptbyid) | **POST** /api/v1/transaction/download/receipt/trans-id | Download transaction receipt by transaction id|
|[**downloadTransactionReceiptByRef**](#downloadtransactionreceiptbyref) | **POST** /api/v1/transaction/download/receipt/trans-ref | Download transaction receipt by transaction reference|
|[**filterAllUserTransactions**](#filterallusertransactions) | **GET** /api/v1/transaction/filter | Filter transactions|
|[**findAllUserTransactions**](#findallusertransactions) | **GET** /api/v1/transaction/find-all | Retrieve all user transactions|
|[**findTransactionById**](#findtransactionbyid) | **GET** /api/v1/transaction/find/trans-id | Retrieve transaction by transaction id|
|[**findTransactionByNo**](#findtransactionbyno) | **GET** /api/v1/transaction/find/trans-no | Retrieve transaction by transaction number|
|[**findTransactionByRef**](#findtransactionbyref) | **GET** /api/v1/transaction/find/trans-ref | Retrieve transaction by transaction reference|
|[**generateKeys**](#generatekeys) | **POST** /api/v1/transaction/callback/safe-haven/generate-keys | Generate user callback keys|

# **downloadTransactionReceiptById**
> string downloadTransactionReceiptById()

Resource to download transaction receipt by transaction id

### Example

```typescript
import {
    TransactionResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionResourceApi(configuration);

let transactionId: string; //Transaction Id (default to undefined)

const { status, data } = await apiInstance.downloadTransactionReceiptById(
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionId** | [**string**] | Transaction Id | defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transaction receipt downloaded successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadTransactionReceiptByRef**
> string downloadTransactionReceiptByRef()

Resource to download transaction receipt by transaction reference

### Example

```typescript
import {
    TransactionResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionResourceApi(configuration);

let transactionRef: string; //Transaction Reference (default to undefined)

const { status, data } = await apiInstance.downloadTransactionReceiptByRef(
    transactionRef
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionRef** | [**string**] | Transaction Reference | defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transaction receipt downloaded successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filterAllUserTransactions**
> ApiResponseDtoListTransactionResponse filterAllUserTransactions()

Resource to filter transactions

### Example

```typescript
import {
    TransactionResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionResourceApi(configuration);

let filterType: 'TRANSACTION_TYPE' | 'TRANSACTION_DATE' | 'PAYMENT_TYPE' | 'MEDIUM' | 'CATEGORY' | 'NARRATION' | 'REMARK'; //Transaction Filter Type (default to undefined)
let filterKeyword: string; //Filter Keyword (default to undefined)
let direction: 'DESCENDING' | 'ASCENDING'; //Sort Direction (default to undefined)
let page: number; //Page (optional) (default to 0)
let size: number; //Size (optional) (default to 50)

const { status, data } = await apiInstance.filterAllUserTransactions(
    filterType,
    filterKeyword,
    direction,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filterType** | [**&#39;TRANSACTION_TYPE&#39; | &#39;TRANSACTION_DATE&#39; | &#39;PAYMENT_TYPE&#39; | &#39;MEDIUM&#39; | &#39;CATEGORY&#39; | &#39;NARRATION&#39; | &#39;REMARK&#39;**]**Array<&#39;TRANSACTION_TYPE&#39; &#124; &#39;TRANSACTION_DATE&#39; &#124; &#39;PAYMENT_TYPE&#39; &#124; &#39;MEDIUM&#39; &#124; &#39;CATEGORY&#39; &#124; &#39;NARRATION&#39; &#124; &#39;REMARK&#39;>** | Transaction Filter Type | defaults to undefined|
| **filterKeyword** | [**string**] | Filter Keyword | defaults to undefined|
| **direction** | [**&#39;DESCENDING&#39; | &#39;ASCENDING&#39;**]**Array<&#39;DESCENDING&#39; &#124; &#39;ASCENDING&#39;>** | Sort Direction | defaults to undefined|
| **page** | [**number**] | Page | (optional) defaults to 0|
| **size** | [**number**] | Size | (optional) defaults to 50|


### Return type

**ApiResponseDtoListTransactionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transaction(s) retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findAllUserTransactions**
> ApiResponseDtoListTransactionResponse findAllUserTransactions()

Resource to retrieve all user transactions

### Example

```typescript
import {
    TransactionResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionResourceApi(configuration);

let page: number; //Page (optional) (default to 0)
let size: number; //Size (optional) (default to 50)

const { status, data } = await apiInstance.findAllUserTransactions(
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page | (optional) defaults to 0|
| **size** | [**number**] | Size | (optional) defaults to 50|


### Return type

**ApiResponseDtoListTransactionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transaction(s) retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findTransactionById**
> ApiResponseDtoTransactionResponse findTransactionById()

Resource to retrieve transaction by transaction id

### Example

```typescript
import {
    TransactionResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionResourceApi(configuration);

let transactionId: string; //Transaction Id (default to undefined)

const { status, data } = await apiInstance.findTransactionById(
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionId** | [**string**] | Transaction Id | defaults to undefined|


### Return type

**ApiResponseDtoTransactionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transaction(s) retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findTransactionByNo**
> ApiResponseDtoTransactionResponse findTransactionByNo()

Resource to retrieve transaction by transaction number

### Example

```typescript
import {
    TransactionResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionResourceApi(configuration);

let transactionNo: string; //Transaction number (default to undefined)

const { status, data } = await apiInstance.findTransactionByNo(
    transactionNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionNo** | [**string**] | Transaction number | defaults to undefined|


### Return type

**ApiResponseDtoTransactionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transaction(s) retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findTransactionByRef**
> ApiResponseDtoTransactionResponse findTransactionByRef()

Resource to retrieve transaction by transaction reference

### Example

```typescript
import {
    TransactionResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionResourceApi(configuration);

let transactionRef: string; //Transaction Reference (default to undefined)

const { status, data } = await apiInstance.findTransactionByRef(
    transactionRef
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionRef** | [**string**] | Transaction Reference | defaults to undefined|


### Return type

**ApiResponseDtoTransactionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transaction(s) retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateKeys**
> ApiResponseDto generateKeys()

Resource to generate user callback keys

### Example

```typescript
import {
    TransactionResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionResourceApi(configuration);

const { status, data } = await apiInstance.generateKeys();
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
|**200** | Keys generated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

