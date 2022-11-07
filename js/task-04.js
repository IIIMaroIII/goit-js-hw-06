const refs = {
  value: document.querySelector("#value"),
  decrement: document.querySelector("button[data-action='decrement']"),
  increment: document.querySelector("button[data-action='increment']"),
};
let counterValue = 0;

const render = () => {
  refs.value.textContent = counterValue;
};

const handleDecrement = () => {
  counterValue -= 1;
  render();
};
const handleIncrement = () => {
  counterValue += 1;
  render();
};

refs.decrement.addEventListener("click", handleDecrement);
refs.increment.addEventListener("click", handleIncrement);

// Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых
// увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
