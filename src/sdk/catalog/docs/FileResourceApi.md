# FileResourceApi

All URIs are relative to *http://177.17.4.12:4172*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadFile**](#downloadfile) | **GET** /api/v1/file/download | Download file from s3 bucket|
|[**previewFile**](#previewfile) | **GET** /api/v1/file/preview | View/preview file from s3 bucket|
|[**uploadFile**](#uploadfile) | **POST** /api/v1/file/upload | Upload file to s3 bucket|
|[**uploadFileFromBase64**](#uploadfilefrombase64) | **POST** /api/v1/file/upload/base64 | Upload file to s3 bucket from base64 string|

# **downloadFile**
> ApiResponseDto downloadFile()

Resource to download file from s3 bucket

### Example

```typescript
import {
    FileResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileResourceApi(configuration);

let fileName: string; //Name of file to download (default to undefined)

const { status, data } = await apiInstance.downloadFile(
    fileName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileName** | [**string**] | Name of file to download | defaults to undefined|


### Return type

**ApiResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File downloaded successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **previewFile**
> ApiResponseDto previewFile()

Resource to view/preview file from s3 bucket

### Example

```typescript
import {
    FileResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileResourceApi(configuration);

let fileName: string; //Name of file to view/preview (default to undefined)

const { status, data } = await apiInstance.previewFile(
    fileName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileName** | [**string**] | Name of file to view/preview | defaults to undefined|


### Return type

**ApiResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File downloaded successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFile**
> ApiResponseDtoFileUploadResponse uploadFile()

Resource to upload file to s3 bucket

### Example

```typescript
import {
    FileResourceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileResourceApi(configuration);

let file: File; //File to upload (default to undefined)

const { status, data } = await apiInstance.uploadFile(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | File to upload | defaults to undefined|


### Return type

**ApiResponseDtoFileUploadResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File uploaded successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFileFromBase64**
> ApiResponseDtoFileUploadResponse uploadFileFromBase64(uploadBase64File)

Resource to upload file to s3 bucket from base64 string

### Example

```typescript
import {
    FileResourceApi,
    Configuration,
    UploadBase64File
} from './api';

const configuration = new Configuration();
const apiInstance = new FileResourceApi(configuration);

let uploadBase64File: UploadBase64File; //

const { status, data } = await apiInstance.uploadFileFromBase64(
    uploadBase64File
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uploadBase64File** | **UploadBase64File**|  | |


### Return type

**ApiResponseDtoFileUploadResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File uploaded successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

