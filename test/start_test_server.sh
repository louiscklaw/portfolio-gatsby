#!/usr/bin/env bash

set -ex

trap 'error_exit' ERR KILL EXIT
error_exit() {
  kill $LIVE_SERVER_PID
}

TMP_DIR=$(mktemp -d)

test/test_build.sh $TMP_DIR

pushd $TMP_DIR

  pushd public
    live-server --no-browser --port=$LOCAL_TEST_PORT . &
    LIVE_SERVER_PID=$!
  popd

popd

sleep 900
