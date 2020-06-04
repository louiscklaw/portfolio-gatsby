#!/usr/bin/env bash

set -ex

if [[ -z "$DEPLOY_TARGET" ]]; then
  echo "DEPLOY_TARGET is empty"
  exit 99
fi

# build gatsby and css
scripts/build.sh

firebase deploy --only hosting:$DEPLOY_TARGET --token $FIREBASE_TOKEN --non-interactive