const inputNameEl = document.querySelector("#name-input");
const spanNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", onWriteInput);

function onWriteInput(event) {
	if (event.currentTarget.value === "") {
		spanNameEl.textContent = "Anonymus";
	} else {
		spanNameEl.textContent = event.currentTarget.value;
	}
}
