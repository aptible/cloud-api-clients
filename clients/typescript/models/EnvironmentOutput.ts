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

import { OrganizationOutput } from './OrganizationOutput';
import { HttpFile } from '../http/http';

export class EnvironmentOutput {
    'name': string;
    'description'?: string;
    'data': any;
    'id': string;
    'organization': OrganizationOutput;
    'awsAccountId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
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
            "name": "organization",
            "baseName": "organization",
            "type": "OrganizationOutput",
            "format": ""
        },
        {
            "name": "awsAccountId",
            "baseName": "aws_account_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EnvironmentOutput.attributeTypeMap;
    }

    public constructor() {
    }
}

