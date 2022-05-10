// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const listIngredients = document.querySelector('#ingredients');
// console.log(listIngredients);

// for (let element of ingredients) {
//   const listItem = document.createElement('li');
// listItem.className = 'item';
// const itemTitle = document.createElement('p');
// itemTitle.textContent = `${element}`;
// listItem.append(itemTitle);
// listIngredients.append(listItem);
// }


function test() {
  
const listIngredients = document.querySelector('#ingredients');
// console.log(listIngredients);

for (let element of ingredients) {
  const listItem = document.createElement('li');
listItem.className = 'item';
const itemTitle = document.createElement('p');
itemTitle.textContent = `${element}`;
listItem.append(itemTitle);
listIngredients.append(listItem);
}
  return listIngredients;
}

console.log(test(ingredients))