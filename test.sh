#!/usr/bin/env bash

set -ex

TMP_DIR=$(mktemp -d)

trap 'catch' ERR EXIT KILL
catch() {
  kill $START_TEST_SERVER_PID
  sleep 1
  rm -rf $TMP_DIR
}

# build and start local test server
test/start_test_server.sh &
START_TEST_SERVER_PID=$!

echo 'sleep a while to let build ready'
sleep 180
node test/puppeteer/puppeteer_helloworld.js
