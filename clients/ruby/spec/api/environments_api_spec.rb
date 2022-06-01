=begin
#Cloud API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 0.1.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.0.1-SNAPSHOT

=end

require 'spec_helper'
require 'json'

# Unit tests for CloudApiClient::EnvironmentsApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'EnvironmentsApi' do
  before do
    # run before each test
    @api_instance = CloudApiClient::EnvironmentsApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of EnvironmentsApi' do
    it 'should create an instance of EnvironmentsApi' do
      expect(@api_instance).to be_instance_of(CloudApiClient::EnvironmentsApi)
    end
  end

  # unit tests for create_environment_api_v1_organizations_organization_id_environments_post
  # Create Environment
  # @param organization_id 
  # @param environment_input 
  # @param [Hash] opts the optional parameters
  # @return [EnvironmentOutput]
  describe 'create_environment_api_v1_organizations_organization_id_environments_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete
  # Delete Environment By Id
  # @param environment_id 
  # @param organization_id 
  # @param [Hash] opts the optional parameters
  # @return [Integer]
  describe 'delete_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get
  # Get Environment By Id
  # @param environment_id 
  # @param organization_id 
  # @param [Hash] opts the optional parameters
  # @return [Array<EnvironmentOutput>]
  describe 'get_environment_by_id_api_v1_organizations_organization_id_environments_environment_id_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_environments_api_v1_organizations_organization_id_environments_get
  # Get Environments
  # @param organization_id 
  # @param [Hash] opts the optional parameters
  # @return [Array<EnvironmentOutput>]
  describe 'get_environments_api_v1_organizations_organization_id_environments_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_environment_api_v1_organizations_organization_id_environments_environment_id_put
  # Update Environment
  # @param environment_id 
  # @param organization_id 
  # @param environment_input 
  # @param [Hash] opts the optional parameters
  # @return [EnvironmentOutput]
  describe 'update_environment_api_v1_organizations_organization_id_environments_environment_id_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
