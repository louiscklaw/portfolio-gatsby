#!/usr/bin/env bash

set -ex

# yarn add global firebase-tools firebase-functions firebase-admin

# node scripts/update_build_info.js

# grep readme from other repo
scripts/grep_readme.sh

yarn
yarn clean
yarn build

firebase deploy --token $FIREBASE_TOKEN --non-interactive
