#!/usr/bin/env bash

set -ex

yarn add global firebase-tools firebase-functions firebase-admin

# node scripts/update_build_info.js

yarn

yarn build

firebase deploy --token $FIREBASE_TOKEN --non-interactive
