function saveOptions(event) {
  let selected = {};

  document.querySelectorAll("input[type=checkbox][data-folder-id]")
    .forEach(cb => {
      if (!cb.checked) 
        return;

      let acc = cb.dataset.accountId;
      let folder = cb.dataset.folderId;

      if (!selected[acc]) 
        selected[acc] = [];
      
      selected[acc].push(folder);
    });

  browser.storage.local.set({ selectedFolders: selected });
  
  event.preventDefault();
}

async function restoreOptions() {
  let { selectedFolders } = await browser.storage.local.get("selectedFolders");
  
  if (!selectedFolders) 
    return;

  document.querySelectorAll("input[type=checkbox][data-folder-id]").forEach(cb => {
    let acc = cb.dataset.accountId;
    let folder = cb.dataset.folderId;

    cb.checked = selectedFolders[acc]?.includes(folder) || false;
  });
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
