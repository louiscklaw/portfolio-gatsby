#!/usr/bin/env node

const {exec} = require('child_process');

var screen_width = [1920]

file_name = (address, screen_width) => {
  return `./${address.replace('/','_')}_${screen_width}.png`
}

screen_width.forEach( sw => {
  [
    'about',
    'project-details/trading-view-dashboard',
    'project-details/appium-behave-notes',
    'test-markdown-mdx',
    'project-details/youtube-splitview-tryout'
  ].map(
    address => {
      exec(`node ../scripts/screenshooter.js --waitfor 1000 --fullpage --w ${sw} --url http://localhost:8000/${address} --file ${file_name(address, sw)}`,{
        cwd: './screenshots'
      }, (err, stdout, stderr)=>{
        if (err) return 99 ;
        if (stderr) return stderr;

        console.log(stdout)
      })
    }
  )

})
