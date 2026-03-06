# UtilitiesResourceApi

All URIs are relative to *http://dev.api.alerts.africa*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listAllCountries**](#listallcountries) | **GET** /api/v1/utilities/countries | Retrieve country list|
|[**listAllLanguages**](#listalllanguages) | **GET** /api/v1/utilities/languages | Retrieve language list|
|[**listAllOrganizationTypes**](#listallorganizationtypes) | **GET** /api/v1/utilities/organization-types | Retrieve organization types|
|[**listAllTransactionsCategories**](#listalltransactionscategories) | **GET** /api/v1/utilities/transaction-categories | Retrieve transaction categories|

# **listAllCountries**
> ApiResponseDtoListCountry listAllCountries()

Resource to retrieve country list

### Example

```typescript
import {
    UtilitiesResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UtilitiesResourceApi(configuration);

const { status, data } = await apiInstance.listAllCountries();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDtoListCountry**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAllLanguages**
> ApiResponseDtoListLanguage listAllLanguages()

Resource to retrieve language list

### Example

```typescript
import {
    UtilitiesResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UtilitiesResourceApi(configuration);

const { status, data } = await apiInstance.listAllLanguages();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDtoListLanguage**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAllOrganizationTypes**
> ApiResponseDtoListOrganizationType listAllOrganizationTypes()

Resource to retrieve organization types

### Example

```typescript
import {
    UtilitiesResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UtilitiesResourceApi(configuration);

const { status, data } = await apiInstance.listAllOrganizationTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDtoListOrganizationType**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAllTransactionsCategories**
> ApiResponseDtoListString listAllTransactionsCategories()

Resource to retrieve transaction categories

### Example

```typescript
import {
    UtilitiesResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UtilitiesResourceApi(configuration);

const { status, data } = await apiInstance.listAllTransactionsCategories();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseDtoListString**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

