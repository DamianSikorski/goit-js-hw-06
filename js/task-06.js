const input = document.querySelector("#validation-input");
const minLength = input.dataset.length;

const validator = () => {
  if (input.classList.contains("invalid")) {
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
  }
  if (input.value.length == minLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", validator);
