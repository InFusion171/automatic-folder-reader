function showInternationalizedText(element, messageKey, ...replacements) {
	if (!element) {
		console.error("No element provided, cannot display internationalized text.");
		return;
	}

	if (!messageKey) {
		console.error("No messageKey provided for element:", element);
		element.textContent = "[error: messageKey missing]";
		return;
	}

	const message = browser.i18n.getMessage(messageKey, replacements);
	element.textContent = message || `[missing i18n: ${messageKey}]`;
}

function fillMessagesInOptionsPage() {
	const allElements = document.querySelectorAll('[messageKey]');

	allElements.forEach(element => {
		const messageKey = element.getAttribute('messageKey');
		if (!messageKey) {
			console.warn("messageKey is missing for element:", element);
			return;
		}

		const replacements = [];
		for (let i = 1; i <= 4; i++) {
			const value = element.dataset[`replacement${i}`];
			if (value) replacements.push(value);
		}

		showInternationalizedText(element, messageKey, ...replacements);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	fillMessagesInOptionsPage();
	console.info("Options page: i18n messages processed.");
});