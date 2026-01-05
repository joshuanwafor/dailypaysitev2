# TestResourceApi

All URIs are relative to *http://177.17.4.12:4172*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**testApi**](#testapi) | **GET** /api/v1/test | Test|
|[**testPushNotification**](#testpushnotification) | **GET** /api/v1/test/notification | Test|
|[**validateLinkedInProfile**](#validatelinkedinprofile) | **POST** /api/v1/test/validate/liknedin-profile | Validate HR LinkedIn profile|

# **testApi**
> ApiResponseDto testApi()

Resource to test authentication and authorization

### Example

```typescript
import {
    TestResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestResourceApi(configuration);

const { status, data } = await apiInstance.testApi();
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
|**200** | Test successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testPushNotification**
> ApiResponseDto testPushNotification()

Resource to test push notification

### Example

```typescript
import {
    TestResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestResourceApi(configuration);

let userId: string; //ID of the user to retrieve (default to undefined)
let fcmToken: string; //FcmToken of the user (default to undefined)

const { status, data } = await apiInstance.testPushNotification(
    userId,
    fcmToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | ID of the user to retrieve | defaults to undefined|
| **fcmToken** | [**string**] | FcmToken of the user | defaults to undefined|


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
|**200** | Test successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateLinkedInProfile**
> ApiResponseDtoHrLinkedInValidationResponse validateLinkedInProfile(hrDataRequest)

Resource to validate HR LinkedIn profile

### Example

```typescript
import {
    TestResourceApi,
    Configuration,
    HrDataRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TestResourceApi(configuration);

let hrDataRequest: HrDataRequest; //

const { status, data } = await apiInstance.validateLinkedInProfile(
    hrDataRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hrDataRequest** | **HrDataRequest**|  | |


### Return type

**ApiResponseDtoHrLinkedInValidationResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Awesome! Profile validated successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

