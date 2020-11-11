#!/usr/bin/env bash

set -ex

trap 'catch' ERR EXIT KILL
catch() {
  echo "error found"
  rm -rf $TMP_DIR
}

TMP_DIR=$(mktemp -d)

rsync -avzh \
  --exclude "node_modules" \
  --exclude "build" \
  --exclude ".cache" \
  --exclude ".git" \
  --exclude "public" \
  --progress ./ $TMP_DIR

pushd $TMP_DIR
  yarn
  yarn build
popd

pushd public
  live-server --port=8001 . &
popd

# node test/deploy_test/sanity_seo.js

node test/seo_test/main.js
