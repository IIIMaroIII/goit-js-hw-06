const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.input.addEventListener("input", onMoving);

function onMoving(event) {
  let valueOfInput = refs.input.value;
  refs.text.style.fontSize = `${valueOfInput}px`;
}
