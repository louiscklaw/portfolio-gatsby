#!/usr/bin/env node

const {exec} = require('child_process');


var screen_width = [1920]

var test_paths = [
  'about',
  'project-details/trading-view-dashboard',
  'project-details/appium-behave-notes',
  'test-markdown-mdx',
  'project-details/youtube-splitview-tryout'
]

// with reference to the project root directory
// var cwd = "test/screenshots"
var actual_screenshot_path = "test/screenshots/actual"

png_file_name = (address, screen_width) => {
  return `./${address.replace('/','_')}_${screen_width}.png`
}

png_file_path = (address, screen_width) => {
  return `${actual_screenshot_path}/${png_file_name(address, screen_width)}`
}

screen_width
  .map( sw => {
    return test_paths.map( test_path => {
        var command = `node test/screenshooter.js --waitfor 3000 --fullpage --w ${sw} --url http://localhost:9000/${test_path} --file "${png_file_path(test_path, sw)}" 2>&1`
        return command
      })
      .map( capture_command => {
        exec(capture_command, (err, stdout, stderr) => {
          console.log(stderr)
          if (err) return process.exit(99)
          console.log(stdout)
        })
        console.log(capture_command)
      })
  })
