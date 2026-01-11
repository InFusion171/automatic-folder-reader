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
