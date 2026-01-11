document.addEventListener('DOMContentLoaded', async () => {
    await loadAccountsAndFolders()
    await restoreOptions()
});

document.querySelector("form").addEventListener("change", saveOptions);

messenger.folders.onCreated.addListener(loadAccountsAndFolders);
messenger.folders.onDeleted.addListener(loadAccountsAndFolders);
messenger.folders.onFolderInfoChanged.addListener(loadAccountsAndFolders);
messenger.folders.onMoved.addListener(loadAccountsAndFolders);
messenger.folders.onRenamed.addListener(loadAccountsAndFolders);

messenger.accounts.onCreated.addListener(loadAccountsAndFolders);
messenger.accounts.onDeleted.addListener(loadAccountsAndFolders);

browser.storage.onChanged.addListener(async () => {
    selectedFolders = await loadOptionsFromStorage()
})

document.addEventListener("DOMContentLoaded", async () => {
    console.info("[Auto read Addon]: addon loaded");

    messenger.folders.onFolderInfoChanged.addListener(onFolderInfoChangedListener);
});