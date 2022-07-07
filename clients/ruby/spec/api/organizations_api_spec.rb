=begin
#Cloud API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 0.1.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.1.0-SNAPSHOT

=end

require 'spec_helper'
require 'json'

# Unit tests for CloudApiClient::OrganizationsApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'OrganizationsApi' do
  before do
    # run before each test
    @api_instance = CloudApiClient::OrganizationsApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of OrganizationsApi' do
    it 'should create an instance of OrganizationsApi' do
      expect(@api_instance).to be_instance_of(CloudApiClient::OrganizationsApi)
    end
  end

  # unit tests for delete_api_v1_organizations_organization_id_delete
  # Delete
  # @param organization_id 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'delete_api_v1_organizations_organization_id_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_organization_by_id_api_v1_organizations_organization_id_get
  # Get Organization By Id
  # @param organization_id 
  # @param [Hash] opts the optional parameters
  # @return [OrganizationOutput]
  describe 'get_organization_by_id_api_v1_organizations_organization_id_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_organizations_api_v1_organizations_get
  # Get Organizations
  # @param [Hash] opts the optional parameters
  # @return [Array<OrganizationOutput>]
  describe 'get_organizations_api_v1_organizations_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for put_organization_api_v1_organizations_organization_id_put
  # Put Organization
  # @param organization_id 
  # @param organization_input 
  # @param [Hash] opts the optional parameters
  # @return [OrganizationOutput]
  describe 'put_organization_api_v1_organizations_organization_id_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
