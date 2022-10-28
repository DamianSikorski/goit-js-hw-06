const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
const boxesDiv = document.querySelector("#boxes");
const input = document.querySelector(`[type="number"]`);
const info = document.querySelector(".info");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = () => {
  const numberOfBoxes = Math.floor(input.value);
  let dimensions = 30;

  if (input.value == "") {
    info.textContent = "Enter the number before clicking this button!";
    info.style.color = "red";
  } else {
    for (let i = 0; i < numberOfBoxes; i++) {
      const div = document.createElement("div");
      boxesDiv.appendChild(div);
      div.style.width = `${dimensions}px`;
      div.style.height = `${dimensions}px`;
      div.style.background = `${getRandomHexColor()}`;
      dimensions = dimensions + 10;
      info.textContent = `Wow! You just created ${input.value} Divs 👻`;
      info.style.color = `green`;
    }
  }
};

const destroyBoxes = () => {
  while (boxesDiv.firstChild) {
    boxesDiv.removeChild(boxesDiv.lastChild);
    info.textContent = `Huh... it seems like you destroyed all divs! 🤔`;
    info.style.color = "black";
  }
};

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
