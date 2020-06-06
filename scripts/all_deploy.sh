#!/usr/bin/env bash

set -ex

yarn clean
scripts/prod_deploy.sh

yarn clean
scripts/staging_deploy.sh