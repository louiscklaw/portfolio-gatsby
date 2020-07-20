#!/usr/bin/env bash

set -ex

dot -Tsvg ./qa-process.dot > qa-process.svg

python3 test.py