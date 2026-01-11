#!/bin/bash

OUTPUT="autoMarkFolderRead.xsi"
BUILD_DIR="build"

if [ -d "$BUILD_DIR" ]; then
    rm -rf "$BUILD_DIR"
fi

mkdir "$BUILD_DIR"

zip -r "$BUILD_DIR/$OUTPUT" \
    _locales \
    html \
    img \
    js \
    manifest.json

