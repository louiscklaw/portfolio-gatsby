#!/usr/bin/env bash

set -ex

yarn

nodemon -e scss,sass -w src --exec "yarn css-build" &
nodemon -e scss,sass -w src --exec "yarn css-desktop-build" &

nodemon -e js,css -w src --exec "yarn clean && yarn build" &

serve -s public &

wait
