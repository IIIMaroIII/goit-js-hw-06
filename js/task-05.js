const refs = {
  span: document.querySelector("#name-output"),
  inputValue: document.querySelector("#name-input"),
};

refs.inputValue.addEventListener("input", onEnterText);

function onEnterText(event) {
  event.currentTarget.value < 1
    ? (refs.span.textContent = "Annonymous")
    : (refs.span.textContent = event.currentTarget.value);
}
