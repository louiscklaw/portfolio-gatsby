#!/usr/bin/env bash

set -ex

test/rebuild.sh

sh -c "yarn serve" &