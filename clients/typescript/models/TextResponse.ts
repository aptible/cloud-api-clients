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

import { HttpFile } from '../http/http';

/**
* Generic text responses on api in payload, no flair
*/
export class TextResponse {
    /**
    * error message payload to bubble up to end user
    */
    'error'?: string;
    /**
    * simple text response payload
    */
    'payload': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TextResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

