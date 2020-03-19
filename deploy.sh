npm run build
mv dist docs
git add docs
git commit -m "New deployed version"
git push origin master
