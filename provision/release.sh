[ -z $1 ] && echo "missing required argument, usage example: './release.sh 1.0.0'" && exit 1;

echo "Releasing version $1"

git checkout --detach
npm install && npm run build
git add dist/main.js dist/main.nomin.js --force
git commit -m $1
git tag $1

git push --tags
git checkout master
