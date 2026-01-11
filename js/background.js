var selectedFolders = new Set()

async function onFolderInfoChangedListener() {	
	
	messenger.messages.query({ "folderId": "", "read": false}).then(
		(m) => {
			for (let message of m.messages) {
				messenger.messages.update(message.id, {"read": true});
				console.log("updatet: " + message.id)
			}
		},
		(error) => {
			console.error("[Auto read Addon]: " + folder + "-folder: " + error);
		}
	);
}

async function loadOptionsFromStorage() {
	let { selectedFolders } = await browser.storage.local.get("selectedFolders")

	if (!selectedFolders)
		return new Set()

	return new Set(selectedFolders)
} 

browser.storage.onChanged.addListener(async () => {
	selectedFolders = await loadOptionsFromStorage()
})

document.addEventListener("DOMContentLoaded", async () => {
	console.info("[Auto read Addon]: addon loaded");

	messenger.folders.onFolderInfoChanged.addListener(onFolderInfoChangedListener);
});