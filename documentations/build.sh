#!/usr/bin/env bash

set -ex

touch ./tracker_life_cycle.html
touch ./qa-process.html

dot -Tsvg ./qa-process.dot > qa-process.svg
dot -Tsvg ./tracker_life_cycle.dot > tracker_life_cycle.svg

python3 test.py
