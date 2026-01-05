# AdminResourceApi

All URIs are relative to *http://177.17.4.12:4172*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAllUsers**](#retrieveallusers) | **GET** /api/v1/admin/users | Retrieve all users|
|[**retrieveUserById1**](#retrieveuserbyid1) | **GET** /api/v1/admin/user | Retrieve user by id|

# **retrieveAllUsers**
> ApiResponseDtoListUsersResponse retrieveAllUsers()

Resource to retrieve all users

### Example

```typescript
import {
    AdminResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminResourceApi(configuration);

let page: number; //Page (default to undefined)
let size: number; //Size (default to undefined)

const { status, data } = await apiInstance.retrieveAllUsers(
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page | defaults to undefined|
| **size** | [**number**] | Size | defaults to undefined|


### Return type

**ApiResponseDtoListUsersResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Users retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveUserById1**
> ApiResponseDtoUsersResponse retrieveUserById1()

Resource to retrieve user by id

### Example

```typescript
import {
    AdminResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminResourceApi(configuration);

let userId: string; //ID of the user to retrieve (default to undefined)

const { status, data } = await apiInstance.retrieveUserById1(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | ID of the user to retrieve | defaults to undefined|


### Return type

**ApiResponseDtoUsersResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

