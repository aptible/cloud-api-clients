from cloud_api_client.paths.api_v1_organizations_organization_id.get import ApiForget
from cloud_api_client.paths.api_v1_organizations_organization_id.put import ApiForput
from cloud_api_client.paths.api_v1_organizations_organization_id.delete import ApiFordelete


class ApiV1OrganizationsOrganizationId(
    ApiForget,
    ApiForput,
    ApiFordelete,
):
    pass
