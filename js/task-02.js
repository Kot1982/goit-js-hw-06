const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listIngredients = document.querySelector("#ingredients");

console.log(listIngredients);

function createListItem () {
	const newElement = ingredients.map(el => {
	const element = document.createElement("li");
	element.textContent = el;
	return element;
});
	listIngredients.append(...newElement);
}
createListItem();