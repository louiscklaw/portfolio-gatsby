#!/usr/bin/env bash

set -ex

scripts/prod_deploy.sh
scripts/staging_deploy.sh