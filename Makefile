SHELL := /bin/bash
PYTHON_ENV := . .venv/bin/activate
PYTHON := ${PYTHON_ENV} && python
DEFAULT_BUNDLE_DIR = $(realpath .)
BUNDLE_DIRECTORY="$(DEFAULT_BUNDLE_DIR)/bundles"

.PHONY: .venv install reclone clean_bundles get_bundles bundles/terraform-aws-core get_cloud_api

.venv:
	python -m venv .venv

install: .venv
	$(PYTHON) -m pip install -e .[dev]

reclone: clean_bundles get_bundles

clean_bundles:
	rm -Rf ./bundles/terraform-*

get_bundles: bundles/terraform-aws-core

bundles/terraform-aws-core:
	rm -rf "$(DEFAULT_BUNDLE_DIR)/bundles"
	mkdir -p "$(DEFAULT_BUNDLE_DIR)/bundles"
	git clone git@github.com:aptible/terraform-aws-core.git "$(DEFAULT_BUNDLE_DIR)/bundles/terraform-aws-core"

.PHONY: generate_openapi_json generate_clients generate_python_client generate_ruby_client generate_go_client generate_typescript_client

generate_clients: clean_clients reclone generate_openapi_json generate_python_client generate_ruby_client generate_go_client generate_typescript_client

clean_clients:
	rm -rf ./clients

generate_openapi_json:
	export BUNDLE_DIRECTORY=$(BUNDLE_DIRECTORY) && \
 	export PRE_START_CHECKS="False" && \
		source ./scripts/setenvs.sh && \
 		$(PYTHON) -m scripts.openapi.generate openapi.json

generate_python_client:
	docker run --rm \
	  -v ${PWD}:/local openapitools/openapi-generator-cli generate --skip-validate-spec \
	  -i /local/openapi.json \
	  -g python \
	  -o /local/clients/python \
	  --additional-properties packageName=cloud_api_client
	touch ./clients/python/cloud_api_client/py.typed
	# affix this so py.typed is discoverable
	echo "[options.package_data]" >> ./clients/python/setup.cfg
	echo "cloud_api_client = py.typed" >> ./clients/python/setup.cfg

generate_ruby_client:
	docker run --rm \
	  -v ${PWD}:/local openapitools/openapi-generator-cli generate --skip-validate-spec \
	  -i /local/openapi.json \
	  -g ruby \
	  -o /local/clients/ruby \
	  --additional-properties gemName=cloud_api_client

generate_go_client:
	docker run --rm \
	  -v ${PWD}:/local openapitools/openapi-generator-cli generate --skip-validate-spec \
	  -i /local/openapi.json \
	  -g go \
	  -o /local/clients/go \
	  --additional-properties=packageName=cloud_api_client \
	  --additional-properties=enumClassPrefix=true \
	  --additional-properties=generateInterfaces=true \
	  --additional-properties=GoSubmodule=true \
	  --git-user-id=aptible \
	  --git-repo-id=cloud-api-clients/clients/go

generate_typescript_client:
	docker run --rm \
	  -v ${PWD}:/local openapitools/openapi-generator-cli generate --skip-validate-spec \
	  -i /local/openapi.json \
	  -g typescript \
	  -o /local/clients/typescript \
	  --additional-properties packageName=cloud_api_client