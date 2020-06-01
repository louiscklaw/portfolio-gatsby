#!/usr/bin/env bash

set -ex

SRC_PATH=src/sass
DST_PATH=src/style

for i in $SRC_PATH/*.scss; do
  INPUT_PATH=$i
  INPUT_FILE=`echo $INPUT_PATH|rev |cut -d'/' -f1 |rev`

  OUTPUT_FILE=${INPUT_FILE//\.scss/\.module\.css}
  OUTPUT_PATH=$DST_PATH/$OUTPUT_FILE

  echo INPUT_PATH:$INPUT_PATH
  echo OUTPUT_PATH:$OUTPUT_PATH

  yarn run css-build $INPUT_PATH $OUTPUT_PATH
done

mv src/style/layout.module.css src/style/layout.css