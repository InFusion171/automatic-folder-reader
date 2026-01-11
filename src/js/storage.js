export let selectedFolders = new Set();

export function saveOptionsToStorage(options) {
    browser.storage.local.set({ "selectedFolders": Array.from(options) || [] });
}

export async function loadOptionsFromStorage() {
    let { selectedFolders } = await browser.storage.local.get("selectedFolders");

    return new Set(selectedFolders || []);
}

/**
 * loading selectedFolders new from storage and updating variable selectedFolders
 */
export async function refreshSelectedFolders() {
    selectedFolders = await loadOptionsFromStorage()
}
