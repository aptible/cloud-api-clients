/**
 * Cloud API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OperationStatus } from './OperationStatus';
import { OperationType } from './OperationType';
import { HttpFile } from '../http/http';

export class OperationOutput {
    'environmentId': string;
    'userId': string;
    'organizationId': string;
    'operationType'?: OperationType;
    'status'?: OperationStatus;
    'assetName': string;
    'assetId': string;
    'assetVersion': string;
    'assetParameters'?: any;
    'id': string;
    'executionId'?: string;
    'requestId': string;
    'clientIp'?: string;
    'tokenData'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "environmentId",
            "baseName": "environment_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "organizationId",
            "baseName": "organization_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "operationType",
            "baseName": "operation_type",
            "type": "OperationType",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OperationStatus",
            "format": ""
        },
        {
            "name": "assetName",
            "baseName": "asset_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "assetId",
            "baseName": "asset_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "assetVersion",
            "baseName": "asset_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "assetParameters",
            "baseName": "asset_parameters",
            "type": "any",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "executionId",
            "baseName": "execution_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "clientIp",
            "baseName": "client_ip",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenData",
            "baseName": "token_data",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OperationOutput.attributeTypeMap;
    }

    public constructor() {
    }
}

