#!/usr/bin/env bash

set -ex

TMP_DIR=$(mktemp -d)

trap 'catch' ERR EXIT KILL
catch() {
  echo "error found"
  rm -rf $TMP_DIR
}


# yarn add global firebase-tools firebase-functions firebase-admin

# node scripts/update_build_info.js

# grep readme from other repo
scripts/grep_readme.sh

rsync -avzh \
  --exclude "node_modules" \
  --exclude "build" \
  --exclude ".cache" \
  --exclude ".git" \
  --exclude "public" \
  --progress ./ $TMP_DIR


cd $TMP_DIR
  yarn
  yarn build


firebase deploy --token $FIREBASE_TOKEN --non-interactive
