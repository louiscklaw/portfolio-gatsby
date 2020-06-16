#!/usr/bin/env bash

set -ex

export DEPLOY_TARGET="production"
export GENERATE_SOURCEMAP=false


# build gatsby and css
scripts/build.sh


if [[ `find public -name "*.map"|wc -l` != "0" ]]; then
  echo "map file found"
  exit 99
fi

scripts/publish.sh
