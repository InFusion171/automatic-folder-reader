import { selectedFolders, refreshSelectedFolders, saveOptionsToStorage } from "./storage.js"

export function saveOptions(event) {
  let selected = [];

  document.querySelectorAll("input[type=checkbox][data-folder-id]").forEach(cb => {
      if (!cb.checked) 
        return;

      selected.push(cb.dataset.folderId);
    });
  
    saveOptionsToStorage(selected)

  event.preventDefault();
}

export async function restoreOptions() {  
  await refreshSelectedFolders()

  document.querySelectorAll("input[type=checkbox][data-folder-id]").forEach(
    cb => cb.checked = selectedFolders.has(cb.dataset.folderId)
  );
}
