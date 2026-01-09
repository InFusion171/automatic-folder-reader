async function onFolderInfoChangedListener(folder, folderInfo) {
	if (!commonFolders) 
		return;
	
	if (folderInfo.unreadMessageCount > 0) {
		messenger.messages.query({"folder": folder, "unread": true}).then(
			(messageList) => {
				for (let message of messageList.messages) {
					messenger.messages.update(message.id, {"read": true});
				}
			},
			(error) => {
				console.error("background: " + folder + "-folder: " + error);
			}
		);
	}
}

document.addEventListener("DOMContentLoaded", async () => {
	console.info("[Addon]: autoread_folder loaded");

	messenger.folders.onFolderInfoChanged.addListener(onFolderInfoChangedListener);
});