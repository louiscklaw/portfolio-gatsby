#!/usr/bin/env bash

set -ex

yarn

nodemon -e scss,sass -w src --exec "scripts/build_scss.sh" &
nodemon -e js,css -w src --exec "yarn start" &

wait
