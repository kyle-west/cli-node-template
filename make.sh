defaultPkgName=`basename $(pwd)`

read -p "cli-name: ($defaultPkgName)" pkgName
read -p "description: " description

pkgName="${pkgName:-$defaultPkgName}"

echo "building $pkgName..."

find . -mindepth 1 -maxdepth 1 -exec sed -i -e "s#__REPLACE_PACKAGE_NAME_WITH_MAKE_CMD__#$pkgName#g" {} \;
find . -mindepth 1 -maxdepth 1 -exec sed -i -e "s#__REPLACE_DESCRIPTION_WITH_MAKE_CMD__#$description#g" {} \;
