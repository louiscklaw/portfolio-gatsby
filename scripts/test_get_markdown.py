#!/usr/bin/env python3

import os,sys
from pprint import pprint
from subprocess import check_output
from string import Template

markdown_template=Template('''---
slug: "/hk-data-searcher"
date: "2019-05-04"
title: "hk data search board"
---

import {MdxProjectDetailTemplate} from "../../templates"
export default MdxProjectDetailTemplate

$MARKDOWN_CONTENT

''')

markdown_content = check_output('curl https://raw.githubusercontent.com/louiscklaw/youtube-split-view-tryout/master/README.md'.split(' ')).decode('utf-8')


with open('src/pages/project-details/youtube-splitview-tryout.mdx','w') as fo:
  fo.write(markdown_template.substitute(
    MARKDOWN_CONTENT=markdown_content
  ))



print('fetch_markdown done')