#!/usr/bin/env bash

set -ex

yarn

touch src/build_info.js

nodemon -e scss,sass -w src --exec "scripts/build_scss.sh" &

yarn start
