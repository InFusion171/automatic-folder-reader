function renderFolders(folders, parentElement, accountId, level = 0) {
  for (let folder of folders) {
	let row = document.createElement("div");
	row.className = "folderRow";
	row.style.marginLeft = `${level * 20}px`;

	let checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.dataset.folderId = folder.id;
	checkbox.dataset.accountId = accountId;

	let label = document.createElement("label");
	label.textContent = folder.name;

	row.appendChild(checkbox);
	row.appendChild(label);
	parentElement.appendChild(row);

	if (folder.subFolders?.length) {
	  renderFolders(folder.subFolders, parentElement, accountId, level + 1);
	}
  }
}

async function loadAccountsAndFolders() {
  let accounts = await browser.accounts.list();
  let container = document.getElementById("accountsContainer");
  container.innerHTML = "";

  for (let account of accounts) {
    let accountDiv = document.createElement("div");
    accountDiv.className = "account";

    accountDiv.innerHTML = `
      <h3>${account.name}</h3>
      <div class="folders"></div>
    `;

    let foldersDiv = accountDiv.querySelector(".folders");
    renderFolders(account.folders, foldersDiv, account.id);

    container.appendChild(accountDiv);
  }
}


