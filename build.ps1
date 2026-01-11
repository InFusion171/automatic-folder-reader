$buildDir = "build"
$srcDir = "src"
$appName = "automatic-folder-reader"

if (Test-Path $buildDir) { Remove-Item -Recurse -Force $buildDir }

New-Item -ItemType Directory -Path $buildDir | Out-Null

$manifest = Get-Content "$srcDir\manifest.json" | ConvertFrom-Json
$version = $manifest.version

$outputFile = "$appName-$version.xpi"

Push-Location $srcDir

$items = @(
    "_locales",
    "html",
    "img",
    "js",
    "manifest.json"
)

Compress-Archive -Path $items -DestinationPath "../$buildDir/$outputFile" -Force