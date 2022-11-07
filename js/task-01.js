const listEl = document.querySelector("#categories");
console.log("Number of categories: ", listEl.children.length);

const itemsListEl = document.querySelectorAll(".item");

function createNamesOfList(listOfItems) {
  listOfItems.forEach((item) => {
    console.log("Category: ", item.firstElementChild.textContent);
    console.log(item.lastElementChild.children.length);
  });
}

createNamesOfList(itemsListEl);
