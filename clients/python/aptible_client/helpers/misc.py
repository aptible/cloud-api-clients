import json
import os
from logging import Logger
from pathlib import Path

from .constants import AUTH_API_URL, CLOUD_API_URL
from ..api.environments_api import EnvironmentsApi
from ..configuration import Configuration
from ..model.environment_input import EnvironmentInput


def get_client_configuration() -> Configuration:
    """

    :return:
    """
    local_token = os.getenv("APTIBLE_TOKEN")
    if local_token is None:
        try:
            tokens_json = open(str(Path.home() / ".aptible" / "tokens.json"), "r").read()
            local_token = json.loads(tokens_json).get(AUTH_API_URL)
        except Exception:
            print("Unable to retrieve tokens from aptible client's default location")
            raise
    return Configuration(
        access_token=local_token,
        host=CLOUD_API_URL,
    )


def update_environment(
    environments_api: EnvironmentsApi,
    environment_id: str,
    organization_id: str,
    logger: Logger
) -> None:
    environment = environments_api.environment_get(environment_id, organization_id)
    environments_api.environment_update(
        environment_id=environment_id,
        organization_id=organization_id,
        environment_input=EnvironmentInput(
            name=environment.name,
            description=environment.description,
            data={
                "upgrade_environment": True
            }
        )
    )
    logger.info("Sent request to upgrade environment")
