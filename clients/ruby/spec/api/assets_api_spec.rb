=begin
#Cloud API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 0.1.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.0.1-SNAPSHOT

=end

require 'spec_helper'
require 'json'

# Unit tests for CloudApiClient::AssetsApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'AssetsApi' do
  before do
    # run before each test
    @api_instance = CloudApiClient::AssetsApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of AssetsApi' do
    it 'should create an instance of AssetsApi' do
      expect(@api_instance).to be_instance_of(CloudApiClient::AssetsApi)
    end
  end

  # unit tests for create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post
  # Create Asset
  # @param environment_id 
  # @param organization_id 
  # @param asset_input 
  # @param [Hash] opts the optional parameters
  # @return [AssetOutput]
  describe 'create_asset_api_v1_organizations_organization_id_environments_environment_id_assets_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete
  # Delete Asset By Id
  # @param asset_id 
  # @param environment_id 
  # @param organization_id 
  # @param [Hash] opts the optional parameters
  # @return [Integer]
  describe 'delete_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get
  # Get Asset By Id
  # @param asset_id 
  # @param environment_id 
  # @param organization_id 
  # @param [Hash] opts the optional parameters
  # @return [AssetOutput]
  describe 'get_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get
  # Get Assets
  # @param environment_id 
  # @param organization_id 
  # @param [Hash] opts the optional parameters
  # @return [Array<AssetOutput>]
  describe 'get_assets_api_v1_organizations_organization_id_environments_environment_id_assets_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put
  # Update Asset By Id
  # @param asset_id 
  # @param environment_id 
  # @param organization_id 
  # @param asset_input 
  # @param [Hash] opts the optional parameters
  # @return [AssetOutput]
  describe 'update_asset_by_id_api_v1_organizations_organization_id_environments_environment_id_assets_asset_id_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
