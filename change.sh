#!/bin/sh
git pull
git add --all
git commit -m "update writing"
git push https://splch:$(echo $GITPASSWORD)@github.com/splch/slc.is.git --all