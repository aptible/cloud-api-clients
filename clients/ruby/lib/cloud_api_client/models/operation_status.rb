=begin
#Cloud API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 0.1.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.1.0-SNAPSHOT

=end

require 'date'
require 'time'

module CloudApiClient
  class OperationStatus
    FAILED = "FAILED".freeze
    REQUESTED = "REQUESTED".freeze
    PENDING = "PENDING".freeze
    PAUSED = "PAUSED".freeze
    IN_PROGRESS = "IN_PROGRESS".freeze
    CANCELED = "CANCELED".freeze
    COMPLETE = "COMPLETE".freeze

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
      constantValues = OperationStatus.constants.select { |c| OperationStatus::const_get(c) == value }
      raise "Invalid ENUM value #{value} for class #OperationStatus" if constantValues.empty?
      value
    end
  end
end