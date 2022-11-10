const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("input", onQuantityOfEnteredCharacters);

function onQuantityOfEnteredCharacters(event) {
  const quantityOfCharacters = event.currentTarget.value.length;
  const inputDataLength = Number(event.currentTarget.dataset.length);
  // console.log(quantityOfCharacters === inputDataLength);
  if (quantityOfCharacters === inputDataLength) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
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
