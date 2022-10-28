const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const greetUser = () => {
  if (input.value == "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = input.value;
  }
};
input.addEventListener("input", greetUser);
