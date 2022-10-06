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

import { AssetParametersOutput } from './AssetParametersOutput';
import { AssetStatus } from './AssetStatus';
import { AssetTerraformOutput } from './AssetTerraformOutput';
import { ConnectionOutput } from './ConnectionOutput';
import { EnvironmentOutput } from './EnvironmentOutput';
import { HttpFile } from '../http/http';

export class AssetOutput {
    'asset': string;
    'assetVersion': string;
    'id': string;
    'connections'?: Array<ConnectionOutput>;
    'currentAssetParameters': AssetParametersOutput;
    'environment': EnvironmentOutput;
    'status': AssetStatus;
    'userDefined': boolean;
    'outputs'?: { [key: string]: AssetTerraformOutput; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "asset",
            "baseName": "asset",
            "type": "string",
            "format": ""
        },
        {
            "name": "assetVersion",
            "baseName": "asset_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "connections",
            "baseName": "connections",
            "type": "Array<ConnectionOutput>",
            "format": ""
        },
        {
            "name": "currentAssetParameters",
            "baseName": "current_asset_parameters",
            "type": "AssetParametersOutput",
            "format": ""
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "EnvironmentOutput",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AssetStatus",
            "format": ""
        },
        {
            "name": "userDefined",
            "baseName": "user_defined",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "outputs",
            "baseName": "outputs",
            "type": "{ [key: string]: AssetTerraformOutput; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AssetOutput.attributeTypeMap;
    }

    public constructor() {
    }
}

