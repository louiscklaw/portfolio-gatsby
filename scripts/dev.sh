#!/usr/bin/env bash

set -ex

yarn

nodemon -e scss,sass -w src --exec "scripts/build_scss.sh" &

yarn start
