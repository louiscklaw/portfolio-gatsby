#!/usr/bin/env bash

set -exu

rm -rf test/screenshots/actual/*.png

node test/take_whole_site_screenshot.js


# trap "exit 1" 0 1 2 3 15

# done