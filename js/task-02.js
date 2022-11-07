const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод
// document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию
// в список ul#ingredients.

function createElement(array) {
  ingredients.forEach((element) => {
    const makeElement = document.createElement("li");
    makeElement.classList.add("item");
    const makeTextContentInElement = document.createElement("p");
    makeTextContentInElement.textContent = `${element}`;

    makeElement.appendChild(makeTextContentInElement);

    const ulEl = document.querySelector("#ingredients");
    ulEl.appendChild(makeElement);
  });
}

createElement(ingredients);
