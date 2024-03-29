# aptible-client
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The `aptible_client` package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.1.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python >=3.6

## Installation & Usage

This python library package is generated without supporting files like setup.py or requirements files

To be able to use it, you will need these dependencies in your own package that uses this library:

* urllib3 >= 1.25.3
* python-dateutil

## Getting Started

In your own code, to use this library to connect and interact with aptible-client,
you can run the following:

```python

import time
import aptible_client
from pprint import pprint
from aptible_client.api import actions_api
from aptible_client.model.action_request import ActionRequest
from aptible_client.model.action_response import ActionResponse
from aptible_client.model.http_validation_error import HTTPValidationError
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = aptible_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = aptible_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)


# Enter a context with an instance of the API client
with aptible_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = actions_api.ActionsApi(api_client)
    asset_id = "asset_id_example" # str | 
    environment_id = "environment_id_example" # str | 
    organization_id = "organization_id_example" # str | 
    action_request = ActionRequest(
        action_name="action_name_example",
        parameters=None,
    ) # ActionRequest | 

    try:
        # Action Create
        api_response = api_instance.action_create(asset_id, environment_id, organization_id, action_request)
        pprint(api_response)
    except aptible_client.ApiException as e:
        print("Exception when calling ActionsApi->action_create: %s\n" % e)
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ActionsApi* | [**action_create**](aptible_client/docs/ActionsApi.md#action_create) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action | Action Create
*ActionsApi* | [**action_get**](aptible_client/docs/ActionsApi.md#action_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action/{action_id} | Action Get
*AssetsApi* | [**asset_create**](aptible_client/docs/AssetsApi.md#asset_create) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Asset Create
*AssetsApi* | [**asset_delete**](aptible_client/docs/AssetsApi.md#asset_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Asset Delete
*AssetsApi* | [**asset_get**](aptible_client/docs/AssetsApi.md#asset_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Asset Get
*AssetsApi* | [**asset_update**](aptible_client/docs/AssetsApi.md#asset_update) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Asset Update
*ConnectionsApi* | [**connection_create**](aptible_client/docs/ConnectionsApi.md#connection_create) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/ | Connection Create
*ConnectionsApi* | [**connection_delete**](aptible_client/docs/ConnectionsApi.md#connection_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Connection Delete
*ConnectionsApi* | [**connection_get**](aptible_client/docs/ConnectionsApi.md#connection_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Connection Get
*DefaultApi* | [**get_healthcheck**](aptible_client/docs/DefaultApi.md#get_healthcheck) | **GET** /api/v1/system/health_check | Get Healthcheck
*EnvironmentsApi* | [**environment_create**](aptible_client/docs/EnvironmentsApi.md#environment_create) | **POST** /api/v1/organizations/{organization_id}/environments | Environment Create
*EnvironmentsApi* | [**environment_delete**](aptible_client/docs/EnvironmentsApi.md#environment_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id} | Environment Delete
*EnvironmentsApi* | [**environment_get**](aptible_client/docs/EnvironmentsApi.md#environment_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id} | Environment Get
*EnvironmentsApi* | [**environment_get_allowed_asset_bundles**](aptible_client/docs/EnvironmentsApi.md#environment_get_allowed_asset_bundles) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/asset_bundles | Environment Get Allowed Asset Bundles
*EnvironmentsApi* | [**environment_get_assets**](aptible_client/docs/EnvironmentsApi.md#environment_get_assets) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Environment Get Assets
*EnvironmentsApi* | [**environment_get_connections**](aptible_client/docs/EnvironmentsApi.md#environment_get_connections) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/connections | Environment Get Connections
*EnvironmentsApi* | [**environment_update**](aptible_client/docs/EnvironmentsApi.md#environment_update) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id} | Environment Update
*OperationsApi* | [**operation_get**](aptible_client/docs/OperationsApi.md#operation_get) | **GET** /api/v1/organizations/{organization_id}/operations/{operation_id} | Operation Get
*OperationsApi* | [**operation_update**](aptible_client/docs/OperationsApi.md#operation_update) | **PUT** /api/v1/operations/{operation_id} | Operation Update
*OrganizationsApi* | [**organization_delete**](aptible_client/docs/OrganizationsApi.md#organization_delete) | **DELETE** /api/v1/organizations/{organization_id} | Organization Delete
*OrganizationsApi* | [**organization_get**](aptible_client/docs/OrganizationsApi.md#organization_get) | **GET** /api/v1/organizations/{organization_id} | Organization Get
*OrganizationsApi* | [**organization_get_environments**](aptible_client/docs/OrganizationsApi.md#organization_get_environments) | **GET** /api/v1/organizations/{organization_id}/environments | Organization Get Environments
*OrganizationsApi* | [**organization_get_operations**](aptible_client/docs/OrganizationsApi.md#organization_get_operations) | **GET** /api/v1/organizations/{organization_id}/operations/ | Organization Get Operations
*OrganizationsApi* | [**organization_list**](aptible_client/docs/OrganizationsApi.md#organization_list) | **GET** /api/v1/organizations/ | Organization List
*OrganizationsApi* | [**organization_update**](aptible_client/docs/OrganizationsApi.md#organization_update) | **PUT** /api/v1/organizations/{organization_id} | Organization Update
*UtilitiesApi* | [**get_user**](aptible_client/docs/UtilitiesApi.md#get_user) | **GET** /api/v1/debug/user_auth | Get User
*UtilitiesApi* | [**get_user_role**](aptible_client/docs/UtilitiesApi.md#get_user_role) | **GET** /api/v1/debug/user_role_middleware_check | Get User Role
*WorkerApi* | [**worker_health_check**](aptible_client/docs/WorkerApi.md#worker_health_check) | **POST** /api/v1/worker/health-check | Worker Health Check


## Documentation For Models

 - [ActionOutput](aptible_client/docs/ActionOutput.md)
 - [ActionRequest](aptible_client/docs/ActionRequest.md)
 - [ActionResponse](aptible_client/docs/ActionResponse.md)
 - [AssetAction](aptible_client/docs/AssetAction.md)
 - [AssetBundle](aptible_client/docs/AssetBundle.md)
 - [AssetInput](aptible_client/docs/AssetInput.md)
 - [AssetOutput](aptible_client/docs/AssetOutput.md)
 - [AssetParametersOutput](aptible_client/docs/AssetParametersOutput.md)
 - [AssetStatus](aptible_client/docs/AssetStatus.md)
 - [AssetTerraformOutput](aptible_client/docs/AssetTerraformOutput.md)
 - [ConnectionInput](aptible_client/docs/ConnectionInput.md)
 - [ConnectionOutput](aptible_client/docs/ConnectionOutput.md)
 - [ConnectionStatus](aptible_client/docs/ConnectionStatus.md)
 - [Data](aptible_client/docs/Data.md)
 - [EnvironmentInput](aptible_client/docs/EnvironmentInput.md)
 - [EnvironmentOutput](aptible_client/docs/EnvironmentOutput.md)
 - [HTTPValidationError](aptible_client/docs/HTTPValidationError.md)
 - [HealthCheckFromWorker](aptible_client/docs/HealthCheckFromWorker.md)
 - [LocationInner](aptible_client/docs/LocationInner.md)
 - [OperationActionUpdate](aptible_client/docs/OperationActionUpdate.md)
 - [OperationAssetUpdate](aptible_client/docs/OperationAssetUpdate.md)
 - [OperationFailure](aptible_client/docs/OperationFailure.md)
 - [OperationOutput](aptible_client/docs/OperationOutput.md)
 - [OperationStatus](aptible_client/docs/OperationStatus.md)
 - [OperationTerraformRunUpdate](aptible_client/docs/OperationTerraformRunUpdate.md)
 - [OperationType](aptible_client/docs/OperationType.md)
 - [OperationUpdate](aptible_client/docs/OperationUpdate.md)
 - [OrganizationInput](aptible_client/docs/OrganizationInput.md)
 - [OrganizationOutput](aptible_client/docs/OrganizationOutput.md)
 - [TextResponse](aptible_client/docs/TextResponse.md)
 - [ValidationError](aptible_client/docs/ValidationError.md)


## Documentation For Authorization


## HTTPBearer

- **Type**: Bearer authentication


## Author




## Notes for Large OpenAPI documents
If the OpenAPI document is large, imports in aptible_client.apis and aptible_client.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from aptible_client.api.default_api import DefaultApi`
- `from aptible_client.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import aptible_client
from aptible_client.apis import *
from aptible_client.models import *
```

