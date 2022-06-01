import json
import sys

from fastapi.openapi.utils import get_openapi

from server.main import app


# borrowed heavily from: https://github.com/tiangolo/fastapi/issues/1173
def generate_api_docs(path: str) -> None:
    with open(path, 'w') as f:
        json.dump(get_openapi(
            title=app.title,
            version=app.version,
            openapi_version=app.openapi_version,
            description=app.description,
            routes=app.routes,
        ), f)


if __name__ == "__main__":
    destination_file_name: str = sys.argv[1]
    generate_api_docs(destination_file_name)
