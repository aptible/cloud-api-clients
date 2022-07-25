=begin
#Cloud API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 0.1.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.0.1

=end

require 'cgi'

module CloudApiClient
  class AssetsApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Create Asset
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param asset_input [AssetInput] 
    # @param [Hash] opts the optional parameters
    # @return [AssetOutput]
    def create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post(environment_id, organization_id, asset_input, opts = {})
      data, _status_code, _headers = create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post_with_http_info(environment_id, organization_id, asset_input, opts)
      data
    end

    # Create Asset
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param asset_input [AssetInput] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(AssetOutput, Integer, Hash)>] AssetOutput data, response status code and response headers
    def create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post_with_http_info(environment_id, organization_id, asset_input, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AssetsApi.create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post ...'
      end
      # verify the required parameter 'environment_id' is set
      if @api_client.config.client_side_validation && environment_id.nil?
        fail ArgumentError, "Missing the required parameter 'environment_id' when calling AssetsApi.create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post"
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling AssetsApi.create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post"
      end
      # verify the required parameter 'asset_input' is set
      if @api_client.config.client_side_validation && asset_input.nil?
        fail ArgumentError, "Missing the required parameter 'asset_input' when calling AssetsApi.create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets'.sub('{' + 'environment_id' + '}', CGI.escape(environment_id.to_s)).sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      content_type = @api_client.select_header_content_type(['application/json'])
      if !content_type.nil?
          header_params['Content-Type'] = content_type
      end

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body] || @api_client.object_to_http_body(asset_input)

      # return_type
      return_type = opts[:debug_return_type] || 'AssetOutput'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"AssetsApi.create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AssetsApi#create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Delete Asset By Id
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Integer]
    def delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete(asset_id, environment_id, organization_id, opts = {})
      data, _status_code, _headers = delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete_with_http_info(asset_id, environment_id, organization_id, opts)
      data
    end

    # Delete Asset By Id
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(Integer, Integer, Hash)>] Integer data, response status code and response headers
    def delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete_with_http_info(asset_id, environment_id, organization_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AssetsApi.delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete ...'
      end
      # verify the required parameter 'asset_id' is set
      if @api_client.config.client_side_validation && asset_id.nil?
        fail ArgumentError, "Missing the required parameter 'asset_id' when calling AssetsApi.delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete"
      end
      # verify the required parameter 'environment_id' is set
      if @api_client.config.client_side_validation && environment_id.nil?
        fail ArgumentError, "Missing the required parameter 'environment_id' when calling AssetsApi.delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete"
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling AssetsApi.delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}'.sub('{' + 'asset_id' + '}', CGI.escape(asset_id.to_s)).sub('{' + 'environment_id' + '}', CGI.escape(environment_id.to_s)).sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Integer'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"AssetsApi.delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:DELETE, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AssetsApi#delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Get Asset By Id
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [AssetOutput]
    def get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get(asset_id, environment_id, organization_id, opts = {})
      data, _status_code, _headers = get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get_with_http_info(asset_id, environment_id, organization_id, opts)
      data
    end

    # Get Asset By Id
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(AssetOutput, Integer, Hash)>] AssetOutput data, response status code and response headers
    def get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get_with_http_info(asset_id, environment_id, organization_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AssetsApi.get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get ...'
      end
      # verify the required parameter 'asset_id' is set
      if @api_client.config.client_side_validation && asset_id.nil?
        fail ArgumentError, "Missing the required parameter 'asset_id' when calling AssetsApi.get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get"
      end
      # verify the required parameter 'environment_id' is set
      if @api_client.config.client_side_validation && environment_id.nil?
        fail ArgumentError, "Missing the required parameter 'environment_id' when calling AssetsApi.get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get"
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling AssetsApi.get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}'.sub('{' + 'asset_id' + '}', CGI.escape(asset_id.to_s)).sub('{' + 'environment_id' + '}', CGI.escape(environment_id.to_s)).sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'AssetOutput'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"AssetsApi.get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AssetsApi#get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Get Assets
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<AssetOutput>]
    def get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get(environment_id, organization_id, opts = {})
      data, _status_code, _headers = get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get_with_http_info(environment_id, organization_id, opts)
      data
    end

    # Get Assets
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<AssetOutput>, Integer, Hash)>] Array<AssetOutput> data, response status code and response headers
    def get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get_with_http_info(environment_id, organization_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AssetsApi.get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get ...'
      end
      # verify the required parameter 'environment_id' is set
      if @api_client.config.client_side_validation && environment_id.nil?
        fail ArgumentError, "Missing the required parameter 'environment_id' when calling AssetsApi.get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get"
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling AssetsApi.get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets'.sub('{' + 'environment_id' + '}', CGI.escape(environment_id.to_s)).sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<AssetOutput>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"AssetsApi.get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AssetsApi#get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Update Asset By Id
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param asset_input [AssetInput] 
    # @param [Hash] opts the optional parameters
    # @return [AssetOutput]
    def update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put(asset_id, environment_id, organization_id, asset_input, opts = {})
      data, _status_code, _headers = update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put_with_http_info(asset_id, environment_id, organization_id, asset_input, opts)
      data
    end

    # Update Asset By Id
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param asset_input [AssetInput] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(AssetOutput, Integer, Hash)>] AssetOutput data, response status code and response headers
    def update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put_with_http_info(asset_id, environment_id, organization_id, asset_input, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AssetsApi.update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put ...'
      end
      # verify the required parameter 'asset_id' is set
      if @api_client.config.client_side_validation && asset_id.nil?
        fail ArgumentError, "Missing the required parameter 'asset_id' when calling AssetsApi.update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put"
      end
      # verify the required parameter 'environment_id' is set
      if @api_client.config.client_side_validation && environment_id.nil?
        fail ArgumentError, "Missing the required parameter 'environment_id' when calling AssetsApi.update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put"
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling AssetsApi.update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put"
      end
      # verify the required parameter 'asset_input' is set
      if @api_client.config.client_side_validation && asset_input.nil?
        fail ArgumentError, "Missing the required parameter 'asset_input' when calling AssetsApi.update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}'.sub('{' + 'asset_id' + '}', CGI.escape(asset_id.to_s)).sub('{' + 'environment_id' + '}', CGI.escape(environment_id.to_s)).sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      content_type = @api_client.select_header_content_type(['application/json'])
      if !content_type.nil?
          header_params['Content-Type'] = content_type
      end

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body] || @api_client.object_to_http_body(asset_input)

      # return_type
      return_type = opts[:debug_return_type] || 'AssetOutput'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"AssetsApi.update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:PUT, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AssetsApi#update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
