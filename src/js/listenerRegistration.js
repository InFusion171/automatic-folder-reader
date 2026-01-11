import { saveOptions, restoreOptions } from "./options.js"
import { renderAccountsAndFolders } from "./renderOptions.js"
import { refreshSelectedFolders } from "./storage.js"
import { markAllSelectedFolderAsRead } from "./markAsRead.js"

export function registerRenderAccountsAndFoldersOnChangeListener() {
    const events = [
        "onCreated",
        "onDeleted",
        "onFolderInfoChanged",
        "onMoved",
        "onRenamed"
    ]

    for (let e of events) {
        messenger.folders[e].addListener(renderAccountsAndFolders)
    }

    ["onCreated", "onDeleted"]
        .forEach(e => messenger.accounts[e].addListener(renderAccountsAndFolders));
}

export function registerOnContentLoaded() {
    document.addEventListener('DOMContentLoaded', async () => {
        console.info("[Auto read Addon]: addon loaded");

        await renderAccountsAndFolders()
        await restoreOptions()

        await markAllSelectedFolderAsRead()
        messenger.folders.onFolderInfoChanged.addListener(markAllSelectedFolderAsRead);
    });
}

export function registerSetSelectedFoldersOnStorageChanged() {
    browser.storage.onChanged.addListener(async () => {
        await refreshSelectedFolders()
    })
}

export function registerSaveOptionOnFormChange() {
    document.querySelector("form").addEventListener("change", saveOptions);
}