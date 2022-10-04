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

import { Data } from './Data';
import { OperationStatus } from './OperationStatus';
import { HttpFile } from '../http/http';

export class OperationUpdate {
    'id': string;
    'status': OperationStatus;
    'data'?: Data;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OperationStatus",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Data",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OperationUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}

