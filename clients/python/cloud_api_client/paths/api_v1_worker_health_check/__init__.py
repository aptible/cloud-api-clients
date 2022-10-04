# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from cloud_api_client.paths.api_v1_worker_health_check import Api

from cloud_api_client.paths import PathValues

path = PathValues.API_V1_WORKER_HEALTHCHECK