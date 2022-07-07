=begin
#Cloud API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 0.1.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.1.0-SNAPSHOT

=end

require 'cgi'

module CloudApiClient
  class OrganizationsApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Delete
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Object]
    def delete_api_v1_organizations_organization_id_delete(organization_id, opts = {})
      data, _status_code, _headers = delete_api_v1_organizations_organization_id_delete_with_http_info(organization_id, opts)
      data
    end

    # Delete
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(Object, Integer, Hash)>] Object data, response status code and response headers
    def delete_api_v1_organizations_organization_id_delete_with_http_info(organization_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: OrganizationsApi.delete_api_v1_organizations_organization_id_delete ...'
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling OrganizationsApi.delete_api_v1_organizations_organization_id_delete"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}'.sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

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
        :operation => :"OrganizationsApi.delete_api_v1_organizations_organization_id_delete",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:DELETE, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: OrganizationsApi#delete_api_v1_organizations_organization_id_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Get Organization By Id
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [OrganizationOutput]
    def get_organization_by_id_api_v1_organizations_organization_id_get(organization_id, opts = {})
      data, _status_code, _headers = get_organization_by_id_api_v1_organizations_organization_id_get_with_http_info(organization_id, opts)
      data
    end

    # Get Organization By Id
    # @param organization_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(OrganizationOutput, Integer, Hash)>] OrganizationOutput data, response status code and response headers
    def get_organization_by_id_api_v1_organizations_organization_id_get_with_http_info(organization_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: OrganizationsApi.get_organization_by_id_api_v1_organizations_organization_id_get ...'
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling OrganizationsApi.get_organization_by_id_api_v1_organizations_organization_id_get"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}'.sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

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
      return_type = opts[:debug_return_type] || 'OrganizationOutput'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"OrganizationsApi.get_organization_by_id_api_v1_organizations_organization_id_get",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: OrganizationsApi#get_organization_by_id_api_v1_organizations_organization_id_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Get Organizations
    # @param [Hash] opts the optional parameters
    # @return [Array<OrganizationOutput>]
    def get_organizations_api_v1_organizations_get(opts = {})
      data, _status_code, _headers = get_organizations_api_v1_organizations_get_with_http_info(opts)
      data
    end

    # Get Organizations
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<OrganizationOutput>, Integer, Hash)>] Array<OrganizationOutput> data, response status code and response headers
    def get_organizations_api_v1_organizations_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: OrganizationsApi.get_organizations_api_v1_organizations_get ...'
      end
      # resource path
      local_var_path = '/api/v1/organizations/'

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
      return_type = opts[:debug_return_type] || 'Array<OrganizationOutput>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"OrganizationsApi.get_organizations_api_v1_organizations_get",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: OrganizationsApi#get_organizations_api_v1_organizations_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Put Organization
    # @param organization_id [String] 
    # @param organization_input [OrganizationInput] 
    # @param [Hash] opts the optional parameters
    # @return [OrganizationOutput]
    def put_organization_api_v1_organizations_organization_id_put(organization_id, organization_input, opts = {})
      data, _status_code, _headers = put_organization_api_v1_organizations_organization_id_put_with_http_info(organization_id, organization_input, opts)
      data
    end

    # Put Organization
    # @param organization_id [String] 
    # @param organization_input [OrganizationInput] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(OrganizationOutput, Integer, Hash)>] OrganizationOutput data, response status code and response headers
    def put_organization_api_v1_organizations_organization_id_put_with_http_info(organization_id, organization_input, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: OrganizationsApi.put_organization_api_v1_organizations_organization_id_put ...'
      end
      # verify the required parameter 'organization_id' is set
      if @api_client.config.client_side_validation && organization_id.nil?
        fail ArgumentError, "Missing the required parameter 'organization_id' when calling OrganizationsApi.put_organization_api_v1_organizations_organization_id_put"
      end
      # verify the required parameter 'organization_input' is set
      if @api_client.config.client_side_validation && organization_input.nil?
        fail ArgumentError, "Missing the required parameter 'organization_input' when calling OrganizationsApi.put_organization_api_v1_organizations_organization_id_put"
      end
      # resource path
      local_var_path = '/api/v1/organizations/{organization_id}'.sub('{' + 'organization_id' + '}', CGI.escape(organization_id.to_s))

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(organization_input)

      # return_type
      return_type = opts[:debug_return_type] || 'OrganizationOutput'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"OrganizationsApi.put_organization_api_v1_organizations_organization_id_put",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:PUT, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: OrganizationsApi#put_organization_api_v1_organizations_organization_id_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end