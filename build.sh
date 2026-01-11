#!/bin/bash

BUILD_DIR="build"
SRC_DIR="src"
APP_NAME="automatic-folder-reader"

rm -rf "$BUILD_DIR"
mkdir "$BUILD_DIR"

VERSION=$(jq -r '.version' "$SRC_DIR/manifest.json")

OUTPUT="$APP_NAME-$VERSION.xpi"

cd "$SRC_DIR" 

zip -r "../$BUILD_DIR/$OUTPUT" \
    _locales \
    html \
    img \
    js \
    manifest.json