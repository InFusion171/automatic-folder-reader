$outputFile = "autoMarkFolderRead.xsi"
$buildDir = "build"

if (Test-Path $buildDir) {
    Remove-Item -Recurse -Force $buildDir
}

New-Item -ItemType Directory -Path $buildDir | Out-Null

$items = @(
    "_locales",
    "html",
    "img",
    "js",
    "manifest.json"
)

Compress-Archive -Path $items -DestinationPath "$buildDir\$outputFile" -Force
