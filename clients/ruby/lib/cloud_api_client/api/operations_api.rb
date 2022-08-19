=begin
#Cloud API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 0.1.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.0.1

=end

require 'cgi'

module CloudApiClient
  class OperationsApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Get Operations
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :asset_id 
    # @option opts [String] :environment_id 
    # @return [Array<OperationOutput>]
    def get_operations_api_v1_organizations_organization_id_operations_get(organization_id, opts = {})
      data, _status_code, _headers = get_operations_api_v1_organizations_organization_id_operations_get_with_http_info(organization_id, opts)
      data
    end

    # Get Operations
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :asset_id 
    # @option opts [String] :environment_id 
    # @return [Array<(Array<OperationOutput>, Integer, Hash)>] Array<OperationOutput> data, response status code and response headers
    def get_operations_api_v1_organizations_organization_id_operations_get_with_http_info(organization_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: OperationsApi.get_operations_api_v1_organizations_organization_id_operations_get ...'
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling OperationsApi.get_operations_api_v1_organizations_organization_id_operations_get"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}/operations/'.sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'asset_id'] = opts[:'asset_id'] if !opts[:'asset_id'].nil?
      query_params[:'environment_id'] = opts[:'environment_id'] if !opts[:'environment_id'].nil?

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<OperationOutput>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"OperationsApi.get_operations_api_v1_organizations_organization_id_operations_get",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: OperationsApi#get_operations_api_v1_organizations_organization_id_operations_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Get Operations By Operation Id
    # @param operation_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<OperationOutput>]
    def get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get(operation_id, organization_id, opts = {})
      data, _status_code, _headers = get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get_with_http_info(operation_id, organization_id, opts)
      data
    end

    # Get Operations By Operation Id
    # @param operation_id [String] 
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<OperationOutput>, Integer, Hash)>] Array<OperationOutput> data, response status code and response headers
    def get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get_with_http_info(operation_id, organization_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: OperationsApi.get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get ...'
      end
      # verify the required parameter 'operation_id' is set
      if @api_client.config.client_side_validation && operation_id.nil?
        fail ArgumentError, "Missing the required parameter 'operation_id' when calling OperationsApi.get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get"
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling OperationsApi.get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}/operations/{operation_id}'.sub('{' + 'operation_id' + '}', CGI.escape(operation_id.to_s)).sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

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
      return_type = opts[:debug_return_type] || 'Array<OperationOutput>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"OperationsApi.get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: OperationsApi#get_operations_by_operation_id_api_v1_organizations_organization_id_operations_operation_id_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Update Operation
    # @param operation_id [String] 
    # @param operation_update [OperationUpdate] 
    # @param [Hash] opts the optional parameters
    # @return [Object]
    def update_operation_api_v1_operations_operation_id_put(operation_id, operation_update, opts = {})
      data, _status_code, _headers = update_operation_api_v1_operations_operation_id_put_with_http_info(operation_id, operation_update, opts)
      data
    end

    # Update Operation
    # @param operation_id [String] 
    # @param operation_update [OperationUpdate] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(Object, Integer, Hash)>] Object data, response status code and response headers
    def update_operation_api_v1_operations_operation_id_put_with_http_info(operation_id, operation_update, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: OperationsApi.update_operation_api_v1_operations_operation_id_put ...'
      end
      # verify the required parameter 'operation_id' is set
      if @api_client.config.client_side_validation && operation_id.nil?
        fail ArgumentError, "Missing the required parameter 'operation_id' when calling OperationsApi.update_operation_api_v1_operations_operation_id_put"
      end
      # verify the required parameter 'operation_update' is set
      if @api_client.config.client_side_validation && operation_update.nil?
        fail ArgumentError, "Missing the required parameter 'operation_update' when calling OperationsApi.update_operation_api_v1_operations_operation_id_put"
      end
      # resource path
      local_var_path = '/api/v1/operations/{operation_id}'.sub('{' + 'operation_id' + '}', CGI.escape(operation_id.to_s))

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(operation_update)

      # return_type
      return_type = opts[:debug_return_type] || 'Object'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"OperationsApi.update_operation_api_v1_operations_operation_id_put",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:PUT, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: OperationsApi#update_operation_api_v1_operations_operation_id_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
