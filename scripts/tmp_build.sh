#!/usr/bin/env bash

set -ex

rm -rf /tmp/portfolio-gatsby-tmp-build
mkdir -p /tmp/portfolio-gatsby-tmp-build

rsync -avzh --exclude ".cache" --exclude ".git" --exclude "node_modules" --exclude "public" . /tmp/portfolio-gatsby-tmp-build

cd /tmp/portfolio-gatsby-tmp-build

  yarn
  yarn clean
  yarn build

cd -