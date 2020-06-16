#!/usr/bin/env bash

set -ex

export DEPLOY_TARGET="staging"


# build gatsby and css
scripts/build.sh


scripts/publish.sh
