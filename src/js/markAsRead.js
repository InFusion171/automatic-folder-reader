import { selectedFolders } from "./storage.js";

export async function markAllSelectedFolderAsRead() {
    for (let folderId of selectedFolders) {
        browser.folders.markAsRead(folderId)
    }
}