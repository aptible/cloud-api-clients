# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from cloud_api_client.apis.path_to_api import path_to_api

import enum


class PathValues(str, enum.Enum):
    API_V1_ORGANIZATIONS_ORGANIZATION_ID_ENVIRONMENTS_ENVIRONMENT_ID_ASSETS_ASSET_ID = "/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}"
    API_V1_ORGANIZATIONS_ORGANIZATION_ID_ENVIRONMENTS_ENVIRONMENT_ID_ASSETS = "/api/v1/organizations/{organization_id}/environments/{environment_id}/assets"
    API_V1_ORGANIZATIONS_ORGANIZATION_ID_ENVIRONMENTS_ENVIRONMENT_ID_ASSETS_ASSET_ID_ACTION = "/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action"
    API_V1_ORGANIZATIONS_ORGANIZATION_ID_ENVIRONMENTS_ENVIRONMENT_ID_ASSETS_ASSET_ID_ACTION_ACTION_ID = "/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/action/{action_id}"
    API_V1_ORGANIZATIONS_ORGANIZATION_ID_ENVIRONMENTS_ENVIRONMENT_ID_ASSET_BUNDLES = "/api/v1/organizations/{organization_id}/environments/{environment_id}/asset_bundles"
    API_V1_ORGANIZATIONS_ORGANIZATION_ID_ENVIRONMENTS_ENVIRONMENT_ID_CONNECTIONS = "/api/v1/organizations/{organization_id}/environments/{environment_id}/connections"
    API_V1_ORGANIZATIONS_ORGANIZATION_ID_ENVIRONMENTS_ENVIRONMENT_ID = "/api/v1/organizations/{organization_id}/environments/{environment_id}"
    API_V1_ORGANIZATIONS_ORGANIZATION_ID_ENVIRONMENTS = "/api/v1/organizations/{organization_id}/environments"
    API_V1_WORKER_HEALTHCHECK = "/api/v1/worker/health-check"
    API_V1_ORGANIZATIONS_ORGANIZATION_ID_ENVIRONMENTS_ENVIRONMENT_ID_ASSETS_ASSET_ID_CONNECTIONS_ = "/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/"
    API_V1_ORGANIZATIONS_ORGANIZATION_ID_ENVIRONMENTS_ENVIRONMENT_ID_ASSETS_ASSET_ID_CONNECTIONS_CONNECTION_ID = "/api/v1/organizations/{organization_id}/environments/{environment_id}/assets/{asset_id}/connections/{connection_id}"
    API_V1_ORGANIZATIONS_ORGANIZATION_ID_OPERATIONS_OPERATION_ID = "/api/v1/organizations/{organization_id}/operations/{operation_id}"
    API_V1_OPERATIONS_OPERATION_ID = "/api/v1/operations/{operation_id}"
    API_V1_ORGANIZATIONS_ORGANIZATION_ID = "/api/v1/organizations/{organization_id}"
    API_V1_ORGANIZATIONS_ = "/api/v1/organizations/"
    API_V1_ORGANIZATIONS_ORGANIZATION_ID_OPERATIONS_ = "/api/v1/organizations/{organization_id}/operations/"
    API_V1_SYSTEM_HEALTH_CHECK = "/api/v1/system/health_check"
    API_V1_DEBUG_USER_AUTH = "/api/v1/debug/user_auth"
    API_V1_DEBUG_USER_ROLE_MIDDLEWARE_CHECK = "/api/v1/debug/user_role_middleware_check"
