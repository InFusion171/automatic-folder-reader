function saveOptions(event) {
  let selected = [];

  document.querySelectorAll("input[type=checkbox][data-folder-id]").forEach(cb => {
      if (!cb.checked) 
        return;

      selected.push(cb.dataset.folderId);
    });

  browser.storage.local.set({ "selectedFolders": selected });
  
  event.preventDefault();
}

async function restoreOptions() {  
  selectedFolders = await loadOptionsFromStorage()
  
  if (!selectedFolders) 
    return;

  document.querySelectorAll("input[type=checkbox][data-folder-id]").forEach(
    cb => cb.checked = selectedFolders.has(cb.dataset.folderId)
  );
}

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
