#!/usr/bin/env bash

set -ex

echo 'start sleep'
sleep 60 &

echo $!

wait

echo 'sleep done'
