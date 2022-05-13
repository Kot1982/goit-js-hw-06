const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSendDataForm);

function onSendDataForm(event) {
	event.preventDefault();
	const dataInput = event.currentTarget.elements;
	const email = dataInput.email.value;
	const password = dataInput.password.value;
	if (email === "" || password === "") {
		alert("Введіть ваші дані");
	} else {
		const newForm = {
			email,
			password,
		};
		console.log(newForm);
		event.currentTarget.reset();
	}
}
