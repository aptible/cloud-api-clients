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

.PHONY: clone reclone

reclone: clean_bundles clone

clone: bundles/terraform-aws-core bundles/terraform-null-core

bundles/terraform-aws-core:
	mkdir -p "$(BUNDLE_DIRECTORY)" || true
	git clone git@github.com:aptible/terraform-aws-core.git "$(BUNDLE_DIRECTORY)/terraform-aws-core"

bundles/terraform-null-core:
	mkdir -p "$(BUNDLE_DIRECTORY)" || true
	git clone git@github.com:aptible/terraform-null-core.git "$(BUNDLE_DIRECTORY)/terraform-null-core"

clean_bundles:
	rm -Rf ./bundles/terraform-*

.PHONY: generate_openapi_json generate_openapi_json_go generate_clients generate_python_client generate_ruby_client generate_go_client generate_typescript_client

generate_clients: clean_clients reclone generate_openapi_json generate_openapi_json_go generate_python_client generate_ruby_client generate_go_client generate_typescript_client

clean_clients:
	rm -rf ./clients

generate_openapi_json:
	export BUNDLE_DIRECTORY=$(BUNDLE_DIRECTORY) && \
 	export PRE_START_CHECKS="False" && \
		source ./scripts/setenvs.sh && \
 		$(PYTHON) -m scripts.openapi.generate openapi.json

generate_openapi_json_go:
	export BUNDLE_DIRECTORY=$(BUNDLE_DIRECTORY) && \
 	export PRE_START_CHECKS="False" && \
	export GENERATING_GO_CLIENT="true" && \
		source ./scripts/setenvs.sh && \
 		$(PYTHON) -m scripts.openapi.generate openapi_go.json

generate_python_client:
	docker run --rm \
	  -v ${PWD}:/local openapitools/openapi-generator-cli generate --skip-validate-spec \
	  -i /local/openapi.json \
	  -g python \
	  -o /local/clients/python \
		--additional-properties generateSourceCodeOnly=true \
	  --additional-properties packageName=aptible_client
	mv ./clients/python/aptible_client/docs/* ./clients/python/docs/
	mv ./clients/python/aptible_client/test/* ./clients/python/test/
	mv ./clients/python/aptible_client_README.md ./clients/python/README.md

generate_ruby_client:
	docker run --rm \
	  -v ${PWD}:/local openapitools/openapi-generator-cli generate --skip-validate-spec \
	  -i /local/openapi.json \
	  -g ruby \
	  -o /local/clients/ruby \
	  --additional-properties gemName=cloud_api_client
	  --additional-properties useAutoload=true

generate_go_client:
	docker run --rm \
	  -v ${PWD}:/local openapitools/openapi-generator-cli generate --skip-validate-spec \
	  -i /local/openapi_go.json \
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
