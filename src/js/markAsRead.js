import { selectedFolders, refreshSelectedFolders } from "./storage.js";

export async function markAllSelectedFolderAsRead() {
    await refreshSelectedFolders()

    for (let folderId of selectedFolders) {
        browser.folders.markAsRead(folderId)
    }
}