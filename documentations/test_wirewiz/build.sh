#!/usr/bin/env bash

set -x

rm $(find . |grep -v yml |grep -v sh|grep -v WireViz)

wireviz ./wireviz_helloworld.yml
