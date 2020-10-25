#!/usr/bin/env bash

# PROJ_HOME=$(pwd)
# PROJECT_DETAILS_PATH=$PROJ_HOME'/src/pages/project-details'

# TMP_DIR=$(mktemp -d)

# # cd $PROJECT_DETAILS_PATH

# #   wget -O m5stack-playlist.mdx https://raw.githubusercontent.com/louiscklaw/m5stack-playlist/main/README.md

# # cd -

# cd $TMP_DIR
#   git clone --depth 1 https://github.com/louiscklaw/daily-job-search.git daily-job-search

#   cp daily-job-search/README.md $PROJECT_DETAILS_PATH/daily-job-search.mdx

# cd -

pipenv run python3 ./scripts/grep_readme.py
