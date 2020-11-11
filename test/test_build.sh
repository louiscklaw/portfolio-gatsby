#!/usr/bin/env bash

set -ex

TMP_DIR=$1
echo $TMP_DIR

rsync -avzh \
  --exclude "node_modules" \
  --exclude "build" \
  --exclude ".cache" \
  --exclude ".git" \
  --exclude "public" \
  --progress ./ $TMP_DIR


pushd $TMP_DIR
  yarn
  yarn clean
  yarn build
popd
