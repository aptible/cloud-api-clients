=begin
#Cloud API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 0.1.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.1.0-SNAPSHOT

=end

require 'cgi'

module CloudApiClient
  class ActionsApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Create Action
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param action_request [ActionRequest] 
    # @param [Hash] opts the optional parameters
    # @return [ActionOutput]
    def create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post(asset_id, environment_id, organization_id, action_request, opts = {})
      data, _status_code, _headers = create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post_with_http_info(asset_id, environment_id, organization_id, action_request, opts)
      data
    end

    # Create Action
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param organization_id [String] 
    # @param action_request [ActionRequest] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(ActionOutput, Integer, Hash)>] ActionOutput data, response status code and response headers
    def create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post_with_http_info(asset_id, environment_id, organization_id, action_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ActionsApi.create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post ...'
      end
      # verify the required parameter 'asset_id' is set
      if @api_client.config.client_side_validation && asset_id.nil?
        fail ArgumentError, "Missing the required parameter 'asset_id' when calling ActionsApi.create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post"
      end
      # verify the required parameter 'environment_id' is set
      if @api_client.config.client_side_validation && environment_id.nil?
        fail ArgumentError, "Missing the required parameter 'environment_id' when calling ActionsApi.create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post"
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling ActionsApi.create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post"
      end
      # verify the required parameter 'action_request' is set
      if @api_client.config.client_side_validation && action_request.nil?
        fail ArgumentError, "Missing the required parameter 'action_request' when calling ActionsApi.create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action'.sub('{' + 'asset_id' + '}', CGI.escape(asset_id.to_s)).sub('{' + 'environment_id' + '}', CGI.escape(environment_id.to_s)).sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(action_request)

      # return_type
      return_type = opts[:debug_return_type] || 'ActionOutput'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"ActionsApi.create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ActionsApi#create_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Get Action
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param action_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [ActionOutput]
    def get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get(asset_id, environment_id, action_id, organization_id, opts = {})
      data, _status_code, _headers = get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get_with_http_info(asset_id, environment_id, action_id, organization_id, opts)
      data
    end

    # Get Action
    # @param asset_id [String] 
    # @param environment_id [String] 
    # @param action_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(ActionOutput, Integer, Hash)>] ActionOutput data, response status code and response headers
    def get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get_with_http_info(asset_id, environment_id, action_id, organization_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ActionsApi.get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get ...'
      end
      # verify the required parameter 'asset_id' is set
      if @api_client.config.client_side_validation && asset_id.nil?
        fail ArgumentError, "Missing the required parameter 'asset_id' when calling ActionsApi.get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get"
      end
      # verify the required parameter 'environment_id' is set
      if @api_client.config.client_side_validation && environment_id.nil?
        fail ArgumentError, "Missing the required parameter 'environment_id' when calling ActionsApi.get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get"
      end
      # verify the required parameter 'action_id' is set
      if @api_client.config.client_side_validation && action_id.nil?
        fail ArgumentError, "Missing the required parameter 'action_id' when calling ActionsApi.get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get"
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling ActionsApi.get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action/{action_id}'.sub('{' + 'asset_id' + '}', CGI.escape(asset_id.to_s)).sub('{' + 'environment_id' + '}', CGI.escape(environment_id.to_s)).sub('{' + 'action_id' + '}', CGI.escape(action_id.to_s)).sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

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
      return_type = opts[:debug_return_type] || 'ActionOutput'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"ActionsApi.get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ActionsApi#get_action_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_action_action_id_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
