# UserProfileResourceApi

All URIs are relative to *http://dev.api.alerts.africa*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changePassword**](#changepassword) | **PUT** /api/v1/user/change-password | Change user password|
|[**changeTransactionPin**](#changetransactionpin) | **PUT** /api/v1/user/transaction-pin/update | Update transaction pin|
|[**deleteAccount**](#deleteaccount) | **DELETE** /api/v1/user/delete-account | Delete user account|
|[**retrieveUserById**](#retrieveuserbyid) | **GET** /api/v1/user | Retrieve user by id|
|[**retrieveUserProfile**](#retrieveuserprofile) | **GET** /api/v1/user/profile | Retrieve user user profile|
|[**setTransactionPin**](#settransactionpin) | **POST** /api/v1/user/transaction-pin/setup | Setup new transaction pin for your account|
|[**signOut**](#signout) | **POST** /api/v1/user/signout | Sign out a user|
|[**updateUserProfile**](#updateuserprofile) | **PUT** /api/v1/user/profile | Update user user profile|
|[**updateUserProfilePhoto**](#updateuserprofilephoto) | **PUT** /api/v1/user/profile/update-photo | Update user profile photo from multipart file|
|[**updateUserProfileUpdatePhotoBased64**](#updateuserprofileupdatephotobased64) | **PUT** /api/v1/user/profile/update-photo/based64 | Update user profile photo from based64 string|

# **changePassword**
> ApiResponseDto changePassword(changePassword)

Resource to change user password

### Example

```typescript
import {
    UserProfileResourceApi,
    Configuration,
    ChangePassword
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileResourceApi(configuration);

let changePassword: ChangePassword; //

const { status, data } = await apiInstance.changePassword(
    changePassword
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changePassword** | **ChangePassword**|  | |


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
|**200** | Password changed successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeTransactionPin**
> ApiResponseDto changeTransactionPin(changeTransactionPin)

Resource to update transaction pin

### Example

```typescript
import {
    UserProfileResourceApi,
    Configuration,
    ChangeTransactionPin
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileResourceApi(configuration);

let changeTransactionPin: ChangeTransactionPin; //

const { status, data } = await apiInstance.changeTransactionPin(
    changeTransactionPin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeTransactionPin** | **ChangeTransactionPin**|  | |


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
|**200** | Transaction pin updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAccount**
> ApiResponseDto deleteAccount()

Resource to delete user account

### Example

```typescript
import {
    UserProfileResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileResourceApi(configuration);

const { status, data } = await apiInstance.deleteAccount();
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
|**200** | Your account has been deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveUserById**
> ApiResponseDtoUsersResponse retrieveUserById()

Resource to retrieve user by id

### Example

```typescript
import {
    UserProfileResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileResourceApi(configuration);

let userId: string; //ID of the user to retrieve (default to undefined)

const { status, data } = await apiInstance.retrieveUserById(
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

# **retrieveUserProfile**
> ApiResponseDtoUsersResponse retrieveUserProfile()

Resource to retrieve user user profile

### Example

```typescript
import {
    UserProfileResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileResourceApi(configuration);

const { status, data } = await apiInstance.retrieveUserProfile();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | User profile retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setTransactionPin**
> ApiResponseDto setTransactionPin(setTransactionPin)

Resource to setup new transaction pin for your account

### Example

```typescript
import {
    UserProfileResourceApi,
    Configuration,
    SetTransactionPin
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileResourceApi(configuration);

let setTransactionPin: SetTransactionPin; //

const { status, data } = await apiInstance.setTransactionPin(
    setTransactionPin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setTransactionPin** | **SetTransactionPin**|  | |


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
|**200** | Transaction pin set successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signOut**
> ApiResponseDto signOut()

Resource to sign out a user

### Example

```typescript
import {
    UserProfileResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileResourceApi(configuration);

const { status, data } = await apiInstance.signOut();
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
|**200** | User sign out successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserProfile**
> ApiResponseDtoUsersResponse updateUserProfile(updateUserProfile)

Resource to update user user profile

### Example

```typescript
import {
    UserProfileResourceApi,
    Configuration,
    UpdateUserProfile
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileResourceApi(configuration);

let updateUserProfile: UpdateUserProfile; //

const { status, data } = await apiInstance.updateUserProfile(
    updateUserProfile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserProfile** | **UpdateUserProfile**|  | |


### Return type

**ApiResponseDtoUsersResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User profile updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserProfilePhoto**
> ApiResponseDtoUsersResponse updateUserProfilePhoto()

Resource to update user user profile photo from multipart file

### Example

```typescript
import {
    UserProfileResourceApi,
    Configuration,
    UpdateUserProfilePhotoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileResourceApi(configuration);

let updateUserProfilePhotoRequest: UpdateUserProfilePhotoRequest; // (optional)

const { status, data } = await apiInstance.updateUserProfilePhoto(
    updateUserProfilePhotoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserProfilePhotoRequest** | **UpdateUserProfilePhotoRequest**|  | |


### Return type

**ApiResponseDtoUsersResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User profile photo updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserProfileUpdatePhotoBased64**
> ApiResponseDtoUsersResponse updateUserProfileUpdatePhotoBased64(updateUserProfilePhoto)

Resource to update user user profile photo from based64 string

### Example

```typescript
import {
    UserProfileResourceApi,
    Configuration,
    UpdateUserProfilePhoto
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileResourceApi(configuration);

let updateUserProfilePhoto: UpdateUserProfilePhoto; //

const { status, data } = await apiInstance.updateUserProfileUpdatePhotoBased64(
    updateUserProfilePhoto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserProfilePhoto** | **UpdateUserProfilePhoto**|  | |


### Return type

**ApiResponseDtoUsersResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User profile photo updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

