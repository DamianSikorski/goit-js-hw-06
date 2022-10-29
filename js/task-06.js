const input = document.querySelector("#validation-input");
const minLength = input.dataset.length;

const validator = () => {
  if (input.value.length == minLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", validator);
