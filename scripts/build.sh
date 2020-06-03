#!/usr/bin/env bash

set -ex

yarn
yarn clean

scripts/build_scss.sh

yarn build

# build done