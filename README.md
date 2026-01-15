# Automatic Folder Reader

## Overview

**Automatic Folder Reader** is a Mozilla Thunderbird add-on that automatically marks messages as *read* in selected folders such as junk, trash, drafts, or templates.

The affected folders can be configured in the add-on’s options panel.

## Why use this add-on?

Some IMAP providers (e.g. GMX) automatically move messages to the spam folder, where they remain marked as unread. Thunderbird counts all unread messages per account, including those in folders that are often irrelevant.

This add-on automatically marks messages in such folders as read, keeping the unread counter meaningful.

## How it works

- Detects unread messages in configured folders
- Automatically marks them as read
- Fully configurable via the add-on options

## Installation

### Manual installation

1. Zip the contents of the `src` folder.
2. Open Thunderbird → Add-ons Manager.
3. Select **Install Add-on from File…**
4. Choose the created ZIP file.

### Prebuilt version

A pre-zipped release is available [here](https://github.com/InFusion171/automatic-folder-reader/releases)

## Motivation

This is a updated version from [Silvester2584](https://github.com/thirdinsight/AutoMarkFolderRead)

## License

Public domain.
