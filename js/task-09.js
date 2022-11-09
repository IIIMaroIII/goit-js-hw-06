function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.btn.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor();
}

// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color и выводит
//    значение цвета в span.color.
