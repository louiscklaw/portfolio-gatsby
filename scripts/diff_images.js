#!/usr/bin/env node

var fs = require('fs');
var PNGDiff = require('png-diff');

var expected_png_filepath = 'scripts/expected-web-screenshot/1280px-HelloWorld.svg.png'
var expected_png = fs.createReadStream(expected_png_filepath);

var actual_png_filepath = 'scripts/expected-web-screenshot/Povray_hello_world.png'

PNGDiff.outputDiffStream(expected_png, expected_png, function(err, outputStream, diffMetric) {
  if (err) throw err;

  if (diffMetric === 0) {
    console.log('No difference, no need to output diff result.');
    return;
  }
  outputStream.pipe(fs.createWriteStream('diffOutput2.png'));
});
