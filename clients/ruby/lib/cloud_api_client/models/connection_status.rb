=begin
#Cloud API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 0.1.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.0.1

=end

require 'date'
require 'time'

module CloudApiClient
  class ConnectionStatus
    ACTIVE = "ACTIVE".freeze
    DELETED = "DELETED".freeze
    FAILED = "FAILED".freeze
    PENDING = "PENDING".freeze

    # Builds the enum from string
    # @param [String] The enum value in the form of the string
    # @return [String] The enum value
    def self.build_from_hash(value)
      new.build_from_hash(value)
    end

    # Builds the enum from string
    # @param [String] The enum value in the form of the string
    # @return [String] The enum value
    def build_from_hash(value)
      constantValues = ConnectionStatus.constants.select { |c| ConnectionStatus::const_get(c) == value }
      raise "Invalid ENUM value #{value} for class #ConnectionStatus" if constantValues.empty?
      value
    end
  end
end
