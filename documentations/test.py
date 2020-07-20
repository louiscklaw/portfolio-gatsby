#!/usr/bin/env python3

import os,sys
from pprint import pprint

qa_process_html_output_path='./qa-process.html'
tracker_life_cycle_output_path ='./tracker_life_cycle.html'

html_template_path='./svg.html.template'

html_template=''
svg_raw_content=[]

def genHtml(svg_in, out_html_file_path):
  with open(svg_in,'r') as fi:
    svg_raw_content = ''.join(fi.readlines()[6:])

  with open(html_template_path,'r') as f_template:
    html_template = ''.join(list(map(lambda x: x.strip(), f_template.readlines())))

  with open(out_html_file_path,'r+') as fo:
    fo.truncate(0)
    fo.writelines(html_template.replace('$SVG_CONTENT',svg_raw_content))

genHtml('./qa-process.svg', qa_process_html_output_path)
genHtml('./tracker_life_cycle.svg', tracker_life_cycle_output_path)