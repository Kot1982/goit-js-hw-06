const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listIngredients = document.querySelector("#ingredients");

console.log(listIngredients);

const newElement = ingredients.forEach(el => {
	const element = document.createElement("li");
	element.textContent = el;
	listIngredients.append(element);
});
