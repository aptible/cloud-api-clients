import json
import os
from pathlib import Path

from .constants import AUTH_API_URL, CLOUD_API_URL
from ..configuration import Configuration


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
