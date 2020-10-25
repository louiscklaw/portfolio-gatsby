#!/usr/bin/env python3

import os,sys
from pprint import pprint

from fabric.api import *

SCRIPT_DIR=os.path.abspath(os.path.dirname(__file__))
PROJ_HOME=os.path.dirname(SCRIPT_DIR)
SRC_DIR=os.path.join(PROJ_HOME,'src')
PROJECT_DETAILS_DIR=SRC_DIR+'/pages/project-details'
TMP_DIR=local('mktemp -d',capture=True)

repos=[
  'm5stack-playlist',
  'daily-job-search',
]

for repo in repos:
  with lcd(TMP_DIR), settings(warn_only=True):
    repo_path_in_project_detail = '{}/{}'.format(
      PROJECT_DETAILS_DIR, repo
    )
    mdx_path_in_project_detail = '{}/{}.mdx'.format(
      PROJECT_DETAILS_DIR, repo
    )
    print(repo_path_in_project_detail)
    print(mdx_path_in_project_detail)

    local('git clone --depth 1 {}'.format('https://github.com/louiscklaw/{}.git'.format(repo)))
    local('mkdir -p {}'.format(repo_path_in_project_detail))
    local('cp {} {}'.format(
      '{}/README.md'.format(repo),
      '{}'.format(mdx_path_in_project_detail)
    ))

    local('cp -r {} {}'.format(
      '{}/docs/'.format(repo),
      repo_path_in_project_detail
    ))
