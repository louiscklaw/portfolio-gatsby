#!/usr/bin/env bash

set -ex

export DEPLOY_TARGET="production"

scripts/publish.sh
