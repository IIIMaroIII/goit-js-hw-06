const refs = {
  input: document.querySelector("#validation-input"),
  valueOfInput: document.querySelector("#validation-input[data-length]"),
};

refs.input.addEventListener("blur", onQuantityOfEnteredCharacters);

function onQuantityOfEnteredCharacters(event) {
  event.currentTarget.value.length < refs.valueOfInput.dataset.length
    ? refs.input.classList.add("invalid")
    : refs.input.classList.add("valid");
}

// Напиши скрипт, который при потере фокуса на
// инпуте(событие blur), проверяет его содержимое на правильное
// количество введённых символов.

// {/* <input */}
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

//     Сколько символов должно быть в инпуте, указывается в
// его атрибуте data - length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.
