#!/usr/bin/env bash

set -ex

if [[ -n "$TARGET" ]]; then
  yarn

  yarn clean

  # build bulma css
  scripts/build_scss.sh

  node scripts/update_build_info.js

  yarn build

  firebase deploy --only hosting:$TARGET --token $FIREBASE_TOKEN --non-interactive
fi

# done