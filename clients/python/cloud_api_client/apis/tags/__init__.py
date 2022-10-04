# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from cloud_api_client.apis.tag_to_api import tag_to_api

import enum


class TagValues(str, enum.Enum):
    ACTIONS = "actions"
    ASSETS = "assets"
    CONNECTIONS = "connections"
    DEFAULT = "default"
    ENVIRONMENTS = "environments"
    OPERATIONS = "operations"
    ORGANIZATIONS = "organizations"
    UTILITIES = "utilities"
    WORKER = "worker"
