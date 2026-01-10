async function onFolderInfoChangedListener(folder, folderInfo) {
	if (folderInfo.unreadMessageCount == 0)
		return

	messenger.messages.query({"folderId": folder.id, "read": false}).then(
		(m) => {
			for (let message of m.messages) {
				messenger.messages.update(message.id, {"read": true});
			}
		},
		(error) => {
			console.error("[Auto read Addon]: " + folder + "-folder: " + error);
		}
	);
}

document.addEventListener("DOMContentLoaded", async () => {
	console.info("[Auto read Addon]: autoread_folder loaded");

	messenger.folders.onFolderInfoChanged.addListener(onFolderInfoChangedListener);
});