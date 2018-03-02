#!/usr/bin/env bash
rm -R dist/
npm run build
mv dist yogasala
rm yogasala.zip
zip -r yogasala.zip yogasala/
scp yogasala.zip ubuntu@poletalks.com:~/
ssh ubuntu@poletalks.com
