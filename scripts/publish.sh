#!/usr/bin/env bash

yarn

yarn clean

# build bulma css
scripts/build_scss.sh

yarn build