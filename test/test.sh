#!/usr/bin/env bash

set -exu
# sudo killall node

# visual regression
# test/gatsby_background_serve.sh

rm -rf test/screenshots/diff/*.png
rm -rf test/screenshots/actual/*.png

yarn
yarn build
yarn serve &
SERVER_PID=$!


# sleep a while to let gatsby server steady
sleep 5
ROOT_NODE_PID=`netstat -tpl|grep -i 9000|awk '{print $7}'|awk -F/ '{print $1}'`

# start screen capture
test/take_screenshot.sh

# compare the captured png with the expected one
node test/compare_png.js

kill $ROOT_NODE_PID
wait
# sudo netstat -tulnp|grep -i 9000

trap "kill $ROOT_NODE_PID" 0 1 2 3 15

# done
