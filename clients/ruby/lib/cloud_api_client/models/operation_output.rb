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
  class OperationOutput
    attr_accessor :environment_id

    attr_accessor :user_id

    attr_accessor :organization_id

    attr_accessor :operation_type

    attr_accessor :status

    attr_accessor :asset_name

    attr_accessor :asset_id

    attr_accessor :asset_version

    attr_accessor :asset_parameters

    attr_accessor :id

    attr_accessor :execution_id

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'environment_id' => :'environment_id',
        :'user_id' => :'user_id',
        :'organization_id' => :'organization_id',
        :'operation_type' => :'operation_type',
        :'status' => :'status',
        :'asset_name' => :'asset_name',
        :'asset_id' => :'asset_id',
        :'asset_version' => :'asset_version',
        :'asset_parameters' => :'asset_parameters',
        :'id' => :'id',
        :'execution_id' => :'execution_id'
      }
    end

    # Returns all the JSON keys this model knows about
    def self.acceptable_attributes
      attribute_map.values
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'environment_id' => :'String',
        :'user_id' => :'String',
        :'organization_id' => :'String',
        :'operation_type' => :'OperationType',
        :'status' => :'OperationStatus',
        :'asset_name' => :'String',
        :'asset_id' => :'String',
        :'asset_version' => :'String',
        :'asset_parameters' => :'Object',
        :'id' => :'String',
        :'execution_id' => :'String'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
        :'operation_type',
        :'status',
      ])
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `CloudApiClient::OperationOutput` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `CloudApiClient::OperationOutput`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'environment_id')
        self.environment_id = attributes[:'environment_id']
      end

      if attributes.key?(:'user_id')
        self.user_id = attributes[:'user_id']
      end

      if attributes.key?(:'organization_id')
        self.organization_id = attributes[:'organization_id']
      end

      if attributes.key?(:'operation_type')
        self.operation_type = attributes[:'operation_type']
      end

      if attributes.key?(:'status')
        self.status = attributes[:'status']
      end

      if attributes.key?(:'asset_name')
        self.asset_name = attributes[:'asset_name']
      end

      if attributes.key?(:'asset_id')
        self.asset_id = attributes[:'asset_id']
      end

      if attributes.key?(:'asset_version')
        self.asset_version = attributes[:'asset_version']
      end

      if attributes.key?(:'asset_parameters')
        self.asset_parameters = attributes[:'asset_parameters']
      end

      if attributes.key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.key?(:'execution_id')
        self.execution_id = attributes[:'execution_id']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @environment_id.nil?
        invalid_properties.push('invalid value for "environment_id", environment_id cannot be nil.')
      end

      if @user_id.nil?
        invalid_properties.push('invalid value for "user_id", user_id cannot be nil.')
      end

      if @organization_id.nil?
        invalid_properties.push('invalid value for "organization_id", organization_id cannot be nil.')
      end

      if @asset_name.nil?
        invalid_properties.push('invalid value for "asset_name", asset_name cannot be nil.')
      end

      if @asset_id.nil?
        invalid_properties.push('invalid value for "asset_id", asset_id cannot be nil.')
      end

      if @asset_version.nil?
        invalid_properties.push('invalid value for "asset_version", asset_version cannot be nil.')
      end

      if @id.nil?
        invalid_properties.push('invalid value for "id", id cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @environment_id.nil?
      return false if @user_id.nil?
      return false if @organization_id.nil?
      return false if @asset_name.nil?
      return false if @asset_id.nil?
      return false if @asset_version.nil?
      return false if @id.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          environment_id == o.environment_id &&
          user_id == o.user_id &&
          organization_id == o.organization_id &&
          operation_type == o.operation_type &&
          status == o.status &&
          asset_name == o.asset_name &&
          asset_id == o.asset_id &&
          asset_version == o.asset_version &&
          asset_parameters == o.asset_parameters &&
          id == o.id &&
          execution_id == o.execution_id
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [environment_id, user_id, organization_id, operation_type, status, asset_name, asset_id, asset_version, asset_parameters, id, execution_id].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def self.build_from_hash(attributes)
      new.build_from_hash(attributes)
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      attributes = attributes.transform_keys(&:to_sym)
      self.class.openapi_types.each_pair do |key, type|
        if attributes[self.class.attribute_map[key]].nil? && self.class.openapi_nullable.include?(key)
          self.send("#{key}=", nil)
        elsif type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :Time
        Time.parse(value)
      when :Date
        Date.parse(value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :Boolean
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        # models (e.g. Pet) or oneOf
        klass = CloudApiClient.const_get(type)
        klass.respond_to?(:openapi_one_of) ? klass.build(value) : klass.build_from_hash(value)
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        if value.nil?
          is_nullable = self.class.openapi_nullable.include?(attr)
          next if !is_nullable || (is_nullable && !instance_variable_defined?(:"@#{attr}"))
        end

        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end

  end

end
