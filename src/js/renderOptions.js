export function renderFolders(folders, parentElement, accountId, level = 0) {
    if (!folders)
        return

    for (let folder of folders) {
        let row = document.createElement("div");
        row.className = "folderRow";
        row.style.marginLeft = `${level * 20}px`;

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.folderId = folder.id;
        checkbox.className = "folder-checkbox"

        let label = document.createElement("label");
        label.textContent = folder.name;
        
        row.appendChild(checkbox);
        row.appendChild(label);
        parentElement.appendChild(row);

        if (folder.subFolders?.length) 
            renderFolders(folder.subFolders, parentElement, accountId, level + 1);
    }
}

export async function renderAccountsAndFolders() {
    let accounts = await browser.accounts.list(true);
    let container = document.getElementById("accountsContainer");

    for (let account of accounts) {
        let accountDiv = document.createElement("div");
        accountDiv.className = "account";

        let h3 = document.createElement("h3");
        h3.textContent = account.name;
        accountDiv.appendChild(h3);

        let foldersDiv = document.createElement("div");
        foldersDiv.className = "folders";
        accountDiv.appendChild(foldersDiv);

        if (account.rootFolder?.subFolders?.length) {
            renderFolders(account.rootFolder.subFolders, foldersDiv, account.id);
        }

        container.appendChild(accountDiv);
    }
}
