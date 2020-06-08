#!/usr/bin/env bash

set -ex

yarn

yarn clean

touch src/build_info.js

nodemon -e scss,sass -w src --exec "scripts/build_scss.sh" &

yarn start
