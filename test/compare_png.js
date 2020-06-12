#!/usr/bin/env node

const fs = require('fs');
const shell = require('shelljs')
const chalk = require('chalk');

const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');


getPngFile = (png_filename) => {
  return PNG.sync.read(fs.readFileSync(png_filename))
}

printPass = (text_to_print) => {
  console.log(chalk.green(text_to_print))
}

printFail = (text_to_print) => {
  console.log(chalk.red(text_to_print))
}

shell.cd('test/screenshots/expected')
shell.ls('*.png').map((expected_png_filename) => {
  var actual_png_path = `../actual/${expected_png_filename}`
  const diff_png_filepath = `../diff/${expected_png_filename}`
  const expected_png_content = getPngFile(expected_png_filename)
  const actual_png_content = getPngFile(actual_png_path)
  const {width, height} = expected_png_content
  const diff = new PNG({width, height})

  var diff_int_result = pixelmatch(
    expected_png_content.data, actual_png_content.data,
    diff.data, width, height, {threshold: 0.2}
    )

  fs.writeFileSync(diff_png_filepath, PNG.sync.write(diff))

  if (diff_int_result > 100){
    printFail(`diff failed for ${expected_png_filename} score:${diff_int_result} ...`)

  } else{
    printPass(`diff pass for file ${expected_png_filename} score:${diff_int_result}`)
  }
})
