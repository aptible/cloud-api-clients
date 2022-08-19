=begin
#Cloud API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 0.1.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.1.0-SNAPSHOT

=end

require 'cgi'

module CloudApiClient
  class ConnectionsApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Create Connection
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param connection_input [ConnectionInput] 
    # @param [Hash] opts the optional parameters
    # @return [ConnectionOutput]
    def create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post(asset_id, environment_id, organization_id, connection_input, opts = {})
      data, _status_code, _headers = create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post_with_http_info(asset_id, environment_id, organization_id, connection_input, opts)
      data
    end

    # Create Connection
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param connection_input [ConnectionInput] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(ConnectionOutput, Integer, Hash)>] ConnectionOutput data, response status code and response headers
    def create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post_with_http_info(asset_id, environment_id, organization_id, connection_input, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ConnectionsApi.create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post ...'
      end
      # verify the required parameter 'asset_id' is set
      if @api_client.config.client_side_validation && asset_id.nil?
        fail ArgumentError, "Missing the required parameter 'asset_id' when calling ConnectionsApi.create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post"
      end
      # verify the required parameter 'environment_id' is set
      if @api_client.config.client_side_validation && environment_id.nil?
        fail ArgumentError, "Missing the required parameter 'environment_id' when calling ConnectionsApi.create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post"
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling ConnectionsApi.create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post"
      end
      # verify the required parameter 'connection_input' is set
      if @api_client.config.client_side_validation && connection_input.nil?
        fail ArgumentError, "Missing the required parameter 'connection_input' when calling ConnectionsApi.create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/'.sub('{' + 'asset_id' + '}', CGI.escape(asset_id.to_s)).sub('{' + 'environment_id' + '}', CGI.escape(environment_id.to_s)).sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(connection_input)

      # return_type
      return_type = opts[:debug_return_type] || 'ConnectionOutput'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"ConnectionsApi.create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ConnectionsApi#create_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Delete Connection
    # @param asset_id [String] 
    # @param connection_id [String] 
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Object]
    def delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete(asset_id, connection_id, environment_id, organization_id, opts = {})
      data, _status_code, _headers = delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete_with_http_info(asset_id, connection_id, environment_id, organization_id, opts)
      data
    end

    # Delete Connection
    # @param asset_id [String] 
    # @param connection_id [String] 
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(Object, Integer, Hash)>] Object data, response status code and response headers
    def delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete_with_http_info(asset_id, connection_id, environment_id, organization_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ConnectionsApi.delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete ...'
      end
      # verify the required parameter 'asset_id' is set
      if @api_client.config.client_side_validation && asset_id.nil?
        fail ArgumentError, "Missing the required parameter 'asset_id' when calling ConnectionsApi.delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete"
      end
      # verify the required parameter 'connection_id' is set
      if @api_client.config.client_side_validation && connection_id.nil?
        fail ArgumentError, "Missing the required parameter 'connection_id' when calling ConnectionsApi.delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete"
      end
      # verify the required parameter 'environment_id' is set
      if @api_client.config.client_side_validation && environment_id.nil?
        fail ArgumentError, "Missing the required parameter 'environment_id' when calling ConnectionsApi.delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete"
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling ConnectionsApi.delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id}'.sub('{' + 'asset_id' + '}', CGI.escape(asset_id.to_s)).sub('{' + 'connection_id' + '}', CGI.escape(connection_id.to_s)).sub('{' + 'environment_id' + '}', CGI.escape(environment_id.to_s)).sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

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
      return_type = opts[:debug_return_type] || 'Object'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"ConnectionsApi.delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:DELETE, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ConnectionsApi#delete_connection_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Get Connection By Id
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param connection_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [ConnectionOutput]
    def get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get(asset_id, environment_id, connection_id, organization_id, opts = {})
      data, _status_code, _headers = get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get_with_http_info(asset_id, environment_id, connection_id, organization_id, opts)
      data
    end

    # Get Connection By Id
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param connection_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(ConnectionOutput, Integer, Hash)>] ConnectionOutput data, response status code and response headers
    def get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get_with_http_info(asset_id, environment_id, connection_id, organization_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ConnectionsApi.get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get ...'
      end
      # verify the required parameter 'asset_id' is set
      if @api_client.config.client_side_validation && asset_id.nil?
        fail ArgumentError, "Missing the required parameter 'asset_id' when calling ConnectionsApi.get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get"
      end
      # verify the required parameter 'environment_id' is set
      if @api_client.config.client_side_validation && environment_id.nil?
        fail ArgumentError, "Missing the required parameter 'environment_id' when calling ConnectionsApi.get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get"
      end
      # verify the required parameter 'connection_id' is set
      if @api_client.config.client_side_validation && connection_id.nil?
        fail ArgumentError, "Missing the required parameter 'connection_id' when calling ConnectionsApi.get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get"
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling ConnectionsApi.get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id}'.sub('{' + 'asset_id' + '}', CGI.escape(asset_id.to_s)).sub('{' + 'environment_id' + '}', CGI.escape(environment_id.to_s)).sub('{' + 'connection_id' + '}', CGI.escape(connection_id.to_s)).sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

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
      return_type = opts[:debug_return_type] || 'ConnectionOutput'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"ConnectionsApi.get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ConnectionsApi#get_connection_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_connections_connection_id_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
