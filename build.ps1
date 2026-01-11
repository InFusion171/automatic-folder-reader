$outputFile = "automatic-folder-reader.xpi"
$buildDir = "build"
$srcDir = "src"

if (Test-Path $buildDir) {
    Remove-Item -Recurse -Force $buildDir
}

New-Item -ItemType Directory -Path $buildDir | Out-Null

Push-Location $srcDir

$items = @(
    "_locales",
    "html",
    "img",
    "js",
    "manifest.json"
)

Compress-Archive -Path $items -DestinationPath "../$buildDir/$outputFile" -Force

