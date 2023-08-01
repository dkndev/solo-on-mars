#! /usr/local/bin/env sh

set -e

yarn generate

#cd .output/public
cd dist

git init
git add -A
git commit -m "New Deployment"
git push -f git@github.com:dkndev/solo-on-mars.git main:gh-pages

cd -
