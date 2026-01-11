import { selectedFolders } from "./storage.js";

export async function markAllSelectedFolderAsRead() {
    messenger.messages.query({ "folderId": selectedFolders, "read": false }).then(
        (m) => {
            for (let message of m.messages) {
                messenger.messages.update(message.id, { "read": true });
                console.log("updatet: " + message.id)
            }
        },
        (error) => {
            console.error("[Auto read Addon]: " + folder + "-folder: " + error);
        }
    );
}