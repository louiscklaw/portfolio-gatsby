#!/usr/bin/env bash

set -ex

dot -Tsvg ./qa-process.dot > qa-process.svg

# https://github.com/kaleocheng/coarse-cli
