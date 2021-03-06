# cloud_api_client

CloudApiClient - the Ruby gem for the Cloud API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.1.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.RubyClientCodegen

## Installation

### Build a gem

To build the Ruby code into a gem:

```shell
gem build cloud_api_client.gemspec
```

Then either install the gem locally:

```shell
gem install ./cloud_api_client-1.0.0.gem
```

(for development, run `gem install --dev ./cloud_api_client-1.0.0.gem` to install the development dependencies)

or publish the gem to a gem hosting service, e.g. [RubyGems](https://rubygems.org/).

Finally add this to the Gemfile:

    gem 'cloud_api_client', '~> 1.0.0'

### Install from Git

If the Ruby gem is hosted at a git repository: https://github.com/GIT_USER_ID/GIT_REPO_ID, then add the following in the Gemfile:

    gem 'cloud_api_client', :git => 'https://github.com/GIT_USER_ID/GIT_REPO_ID.git'

### Include the Ruby code directly

Include the Ruby code directly using `-I` as follows:

```shell
ruby -Ilib script.rb
```

## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:

```ruby
# Load the gem
require 'cloud_api_client'

# Setup authorization
CloudApiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = CloudApiClient::AssetsApi.new
environment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
organization_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
asset_input = CloudApiClient::AssetInput.new({asset: 'asset_example', asset_version: 'asset_version_example', asset_parameters: 3.56}) # AssetInput | 

begin
  #Create Asset
  result = api_instance.create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post(environment_id, organization_id, asset_input)
  p result
rescue CloudApiClient::ApiError => e
  puts "Exception when calling AssetsApi->create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post: #{e}"
end

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudApiClient::AssetsApi* | [**create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post**](docs/AssetsApi.md#create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Create Asset
*CloudApiClient::AssetsApi* | [**delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete**](docs/AssetsApi.md#delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Delete Asset By Id
*CloudApiClient::AssetsApi* | [**get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get**](docs/AssetsApi.md#get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Get Asset By Id
*CloudApiClient::AssetsApi* | [**get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get**](docs/AssetsApi.md#get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets | Get Assets
*CloudApiClient::AssetsApi* | [**update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put**](docs/AssetsApi.md#update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id} | Update Asset By Id
*CloudApiClient::ConnectionsApi* | [**create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post**](docs/ConnectionsApi.md#create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post) | **POST** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/ | Create Connection
*CloudApiClient::ConnectionsApi* | [**delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete**](docs/ConnectionsApi.md#delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Delete Connection
*CloudApiClient::ConnectionsApi* | [**get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get**](docs/ConnectionsApi.md#get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id} | Get Connection By Id
*CloudApiClient::EnvironmentsApi* | [**create_environment_api_v1_organizations_organization_id_environments_post**](docs/EnvironmentsApi.md#create_environment_api_v1_organizations_organization_id_environments_post) | **POST** /api/v1/organizations/{organization_id}/environments | Create Environment
*CloudApiClient::EnvironmentsApi* | [**delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete**](docs/EnvironmentsApi.md#delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete) | **DELETE** /api/v1/organizations/{organization_id}/environments/{environment_id} | Delete Environment By Id
*CloudApiClient::EnvironmentsApi* | [**get_environment_allowed_assets_api_v1_organizations_organization_id_environments_environment_id_asset_bundles_get**](docs/EnvironmentsApi.md#get_environment_allowed_assets_api_v1_organizations_organization_id_environments_environment_id_asset_bundles_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/asset_bundles | Get Environment Allowed Assets
*CloudApiClient::EnvironmentsApi* | [**get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get**](docs/EnvironmentsApi.md#get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id} | Get Environment By Id
*CloudApiClient::EnvironmentsApi* | [**get_environment_connections_api_v1_organizations_organization_id_environments_environment_id_connections_get**](docs/EnvironmentsApi.md#get_environment_connections_api_v1_organizations_organization_id_environments_environment_id_connections_get) | **GET** /api/v1/organizations/{organization_id}/environments/{environment_id}/connections | Get Environment Connections
*CloudApiClient::EnvironmentsApi* | [**get_environments_api_v1_organizations_organization_id_environments_get**](docs/EnvironmentsApi.md#get_environments_api_v1_organizations_organization_id_environments_get) | **GET** /api/v1/organizations/{organization_id}/environments | Get Environments
*CloudApiClient::EnvironmentsApi* | [**update_environment_api_v1_organizations_organization_id_environments_environment_id_put**](docs/EnvironmentsApi.md#update_environment_api_v1_organizations_organization_id_environments_environment_id_put) | **PUT** /api/v1/organizations/{organization_id}/environments/{environment_id} | Update Environment
*CloudApiClient::OperationsApi* | [**get_operations_api_v1_organizations_organization_id_operations_get**](docs/OperationsApi.md#get_operations_api_v1_organizations_organization_id_operations_get) | **GET** /api/v1/organizations/{organization_id}/operations/ | Get Operations
*CloudApiClient::OperationsApi* | [**get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get**](docs/OperationsApi.md#get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get) | **GET** /api/v1/organizations/{organization_id}/operations/{operation_id} | Get Operations By Operation Id
*CloudApiClient::OrganizationsApi* | [**delete_api_v1_organizations_organization_id_delete**](docs/OrganizationsApi.md#delete_api_v1_organizations_organization_id_delete) | **DELETE** /api/v1/organizations/{organization_id} | Delete
*CloudApiClient::OrganizationsApi* | [**get_organization_by_id_api_v1_organizations_organization_id_get**](docs/OrganizationsApi.md#get_organization_by_id_api_v1_organizations_organization_id_get) | **GET** /api/v1/organizations/{organization_id} | Get Organization By Id
*CloudApiClient::OrganizationsApi* | [**get_organizations_api_v1_organizations_get**](docs/OrganizationsApi.md#get_organizations_api_v1_organizations_get) | **GET** /api/v1/organizations/ | Get Organizations
*CloudApiClient::OrganizationsApi* | [**put_organization_api_v1_organizations_organization_id_put**](docs/OrganizationsApi.md#put_organization_api_v1_organizations_organization_id_put) | **PUT** /api/v1/organizations/{organization_id} | Put Organization
*CloudApiClient::UtilitiesApi* | [**get_ping_api_v1_debug_ping_get**](docs/UtilitiesApi.md#get_ping_api_v1_debug_ping_get) | **GET** /api/v1/debug/ping | Get Ping
*CloudApiClient::UtilitiesApi* | [**get_user_api_v1_debug_user_auth_get**](docs/UtilitiesApi.md#get_user_api_v1_debug_user_auth_get) | **GET** /api/v1/debug/user_auth | Get User
*CloudApiClient::UtilitiesApi* | [**get_user_role_api_v1_debug_user_role_middleware_check_get**](docs/UtilitiesApi.md#get_user_role_api_v1_debug_user_role_middleware_check_get) | **GET** /api/v1/debug/user_role_middleware_check | Get User Role
*CloudApiClient::WorkerApi* | [**update_operation_api_v1_operations_operation_id_operation_status_put**](docs/WorkerApi.md#update_operation_api_v1_operations_operation_id_operation_status_put) | **PUT** /api/v1/operations/{operation_id}/{operation_status} | Update Operation
*CloudApiClient::WorkerApi* | [**worker_health_check_api_v1_worker_health_check_post**](docs/WorkerApi.md#worker_health_check_api_v1_worker_health_check_post) | **POST** /api/v1/worker/health-check | Worker Health Check


## Documentation for Models

 - [CloudApiClient::AssetAction](docs/AssetAction.md)
 - [CloudApiClient::AssetBundle](docs/AssetBundle.md)
 - [CloudApiClient::AssetInput](docs/AssetInput.md)
 - [CloudApiClient::AssetOutput](docs/AssetOutput.md)
 - [CloudApiClient::AssetParametersOutput](docs/AssetParametersOutput.md)
 - [CloudApiClient::AssetStatus](docs/AssetStatus.md)
 - [CloudApiClient::ConnectionInput](docs/ConnectionInput.md)
 - [CloudApiClient::ConnectionOutput](docs/ConnectionOutput.md)
 - [CloudApiClient::ConnectionStatus](docs/ConnectionStatus.md)
 - [CloudApiClient::EnvironmentInput](docs/EnvironmentInput.md)
 - [CloudApiClient::EnvironmentOutput](docs/EnvironmentOutput.md)
 - [CloudApiClient::HTTPValidationError](docs/HTTPValidationError.md)
 - [CloudApiClient::HealthCheckFromWorker](docs/HealthCheckFromWorker.md)
 - [CloudApiClient::LocationInner](docs/LocationInner.md)
 - [CloudApiClient::OperationOutput](docs/OperationOutput.md)
 - [CloudApiClient::OperationStatus](docs/OperationStatus.md)
 - [CloudApiClient::OperationType](docs/OperationType.md)
 - [CloudApiClient::OrganizationInput](docs/OrganizationInput.md)
 - [CloudApiClient::OrganizationOutput](docs/OrganizationOutput.md)
 - [CloudApiClient::TextResponse](docs/TextResponse.md)
 - [CloudApiClient::ValidationError](docs/ValidationError.md)


## Documentation for Authorization


### HTTPBearer

- **Type**: Bearer authentication

