#!/usr/bin/env bash
# NOTE: Heavily borrowed/adapted from: https://github.com/aptible/action-python-lockfile-update
# see scripts/update.sh for more reference above

set -e

# Set variables
GITHUB_WORKFLOW_NO_KEY_WARNING="WARNING: Using GITHUB_TOKEN instead of Deploy Key. Github Action Workflows will not be triggered."
PR_BODY_TEXT=${PR_BODY_TEXT:-This Automated PR updates the openapi clients files to the latest versions. As this is automated it should be reviewed for errors before merging.}
PR_TITLE=${PR_TITLE:-Automated client generation}
COMMIT_MESSAGE=${COMMIT_MESSAGE:-Updating clients based on parent service.}

# Configure git
echo "Configuring git"

## Needed to work around permissions issues.
git config --global --add safe.directory "${GITHUB_WORKSPACE}"
git config --global --add safe.directory /github/workspace

## User must be configured to commit.
git config --global user.name "${GITHUB_USERNAME:-$GITHUB_ACTOR}"
git config --global user.email "${GITHUB_USERNAME:-$GITHUB_ACTOR}@users.noreply.github.com"

## Configure Remote
if [[ -z $DEPLOY_KEY ]]; then
  # If no deploy key is added fall back to the access token
  echo $GITHUB_WORKFLOW_NO_KEY_WARNING
  git remote set-url origin "https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}"
  PR_BODY_TEXT="${PR_BODY_TEXT} \n\n $GITHUB_WORKFLOW_NO_KEY_WARNING"
else
  if [[ -z $SSH_AUTH_SOCK ]]
  then
    echo "Starting SSH Agent"
    echo "SSH_AUTH_SOCK=/tmp/ssh_auth.sock" >> $GITHUB_ENV
    ssh-agent -a /tmp/ssh_auth.sock > /dev/null
    export SSH_AUTH_SOCK=/tmp/ssh_auth.sock
  else
    echo "Agent is already running."
  fi

  echo "Configuring Git for SSH"
  git remote set-url origin git@github.com:${GITHUB_REPOSITORY}.git
fi

# Switch Branches
START_BRANCH=$(git branch --show-current)
NEW_BRANCH_NAME=${BRANCH_PREFIX:-"generate-clients"}-$(date +%s)
echo Creating and switching to branch $NEW_BRANCH_NAME.
git checkout -B $NEW_BRANCH_NAME

# Generate clients
echo "Starting generation of clients"

# install CLI tool for global usage and runt he command
# currently pinned or will fail:
# - slack thread: https://aptible.slack.com/archives/C03C2STPTDX/p1664896796815599
# - slab doc ref: https://aptible.slab.com/posts/current-technical-debt-qagsi56t#h2dgy-open-api-client-generator-version
npm install @openapitools/openapi-generator-cli@2 -g
openapi-generator-cli version-manager set 6.0.1

# generate python client
openapi-generator-cli generate --skip-validate-spec \
  -i openapi.json \
  -g python \
  -o clients/python \
  --additional-properties packageName=cloud_api_client
# post process and add required python deps for discovery
touch clients/python/cloud_api_client/py.typed
# affix this so py.typed is discoverable
echo "[options.package_data]" >> ./clients/python/setup.cfg
echo "cloud_api_client = py.typed" >> ./clients/python/setup.cfg

# generate ruby client
openapi-generator-cli generate --skip-validate-spec \
	  -i openapi.json \
	  -g ruby \
	  -o clients/ruby \
	  --additional-properties gemName=cloud_api_client

# generate golang client
openapi-generator-cli generate --skip-validate-spec \
	  -i openapi_go.json \
	  -g go \
	  -o clients/go \
	  --additional-properties=packageName=cloud_api_client \
	  --additional-properties=enumClassPrefix=true \
	  --additional-properties=generateInterfaces=true \
	  --additional-properties=GoSubmodule=true \
	  --git-user-id=aptible \
	  --git-repo-id=cloud-api-clients/clients/go

# generate typescript client
openapi-generator-cli generate --skip-validate-spec \
	  -i openapi.json \
	  -g typescript \
	  -o clients/typescript \
	  --additional-properties packageName=cloud_api_client

echo "Adding changes to git"
git add clients

GIT_STATUS=$(git status -s)
  if [[ -z GIT_STATUS ]]; then
  echo "No updates to push- your clients were already up to date."
  exit 0
  fi
echo $GIT_STATUS

if [[ ! -z $DEPLOY_KEY ]]; then
  echo "Removing build keys from Agent to avoid conflicts with Deploy Key"
  ssh-add -D

  echo "Adding Deploy Key to to Agent"
  ssh-add - <<< "$DEPLOY_KEY"

  echo "Setting git remote to use SSH"
  git remote set-url origin git@github.com:${GITHUB_REPOSITORY}.git
fi

echo "Committing changes to git and pushing to Github."
git commit -m "$COMMIT_MESSAGE"
git push --set-upstream origin $NEW_BRANCH_NAME

set -x
echo "Creating Pull Request."
echo -e $PR_BODY_TEXT | gh pr create --base "$START_BRANCH" --title "$PR_TITLE" -F -