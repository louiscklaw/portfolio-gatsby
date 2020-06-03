#!/usr/bin/env bash

set -ex

yarn
yarn clean

scripts/build_scss.sh

node scripts/update_build_info.js

yarn build

#done