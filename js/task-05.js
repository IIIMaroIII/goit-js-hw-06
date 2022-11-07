const refs = {
  loginValue: document.querySelector("#name-output"),
  inputValue: document.querySelector("#name-input"),
};
function onEnterText(event) {
  refs.loginValue.textContent = event.currentTarget.value;
}

refs.inputValue.addEventListener("input", onEnterText);
