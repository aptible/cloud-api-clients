=begin
#Cloud API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 0.1.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.1.0-SNAPSHOT

=end

# Common files
require 'cloud_api_client/api_client'
require 'cloud_api_client/api_error'
require 'cloud_api_client/version'
require 'cloud_api_client/configuration'

# Models
require 'cloud_api_client/models/asset_input'
require 'cloud_api_client/models/asset_output'
require 'cloud_api_client/models/asset_parameters_output'
require 'cloud_api_client/models/environment_input'
require 'cloud_api_client/models/environment_output'
require 'cloud_api_client/models/http_validation_error'
require 'cloud_api_client/models/location_inner'
require 'cloud_api_client/models/operation_output'
require 'cloud_api_client/models/operation_status'
require 'cloud_api_client/models/operation_type'
require 'cloud_api_client/models/organization_input'
require 'cloud_api_client/models/organization_output'
require 'cloud_api_client/models/text_response'
require 'cloud_api_client/models/validation_error'

# APIs
require 'cloud_api_client/api/assets_api'
require 'cloud_api_client/api/environments_api'
require 'cloud_api_client/api/operations_api'
require 'cloud_api_client/api/organizations_api'
require 'cloud_api_client/api/utilities_api'
require 'cloud_api_client/api/worker_api'

module CloudApiClient
  class << self
    # Customize default settings for the SDK using block.
    #   CloudApiClient.configure do |config|
    #     config.username = "xxx"
    #     config.password = "xxx"
    #   end
    # If no block given, return the default Configuration object.
    def configure
      if block_given?
        yield(Configuration.default)
      else
        Configuration.default
      end
    end
  end
end
