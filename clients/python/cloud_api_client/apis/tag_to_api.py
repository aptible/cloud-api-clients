import typing_extensions

from cloud_api_client.apis.tags import TagValues
from cloud_api_client.apis.tags.actions_api import ActionsApi
from cloud_api_client.apis.tags.assets_api import AssetsApi
from cloud_api_client.apis.tags.connections_api import ConnectionsApi
from cloud_api_client.apis.tags.default_api import DefaultApi
from cloud_api_client.apis.tags.environments_api import EnvironmentsApi
from cloud_api_client.apis.tags.operations_api import OperationsApi
from cloud_api_client.apis.tags.organizations_api import OrganizationsApi
from cloud_api_client.apis.tags.utilities_api import UtilitiesApi
from cloud_api_client.apis.tags.worker_api import WorkerApi

TagToApi = typing_extensions.TypedDict(
    'TagToApi',
    {
        TagValues.ACTIONS: ActionsApi,
        TagValues.ASSETS: AssetsApi,
        TagValues.CONNECTIONS: ConnectionsApi,
        TagValues.DEFAULT: DefaultApi,
        TagValues.ENVIRONMENTS: EnvironmentsApi,
        TagValues.OPERATIONS: OperationsApi,
        TagValues.ORGANIZATIONS: OrganizationsApi,
        TagValues.UTILITIES: UtilitiesApi,
        TagValues.WORKER: WorkerApi,
    }
)

tag_to_api = TagToApi(
    {
        TagValues.ACTIONS: ActionsApi,
        TagValues.ASSETS: AssetsApi,
        TagValues.CONNECTIONS: ConnectionsApi,
        TagValues.DEFAULT: DefaultApi,
        TagValues.ENVIRONMENTS: EnvironmentsApi,
        TagValues.OPERATIONS: OperationsApi,
        TagValues.ORGANIZATIONS: OrganizationsApi,
        TagValues.UTILITIES: UtilitiesApi,
        TagValues.WORKER: WorkerApi,
    }
)
