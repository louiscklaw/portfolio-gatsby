#!/usr/bin/env python3

import os,sys
from pprint import pprint

html_output_path='./qa-process.html'
html_template_path='./qa-process.html.template'

html_template=''

svg_raw_content=[]
with open('./qa-process.svg','r') as fi:
  svg_raw_content = ''.join(fi.readlines()[6:])

with open(html_template_path,'r') as f_template:
  html_template = ''.join(
    list(
      map(lambda x: x.strip(), f_template.readlines())
    )
  )

with open(html_output_path,'r+') as fo:
  fo.truncate(0)
  fo.writelines(html_template.replace('$SVG_CONTENT',svg_raw_content))