const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
const boxesDiv = document.querySelector("#boxes");
const input = document.querySelector(`[type="number"]`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = () => {
  const numberOfBoxes = Math.floor(input.value);
  let dimensions = 30;
  for (let i = 0; i < numberOfBoxes; i++) {
    const div = document.createElement("div");
    boxesDiv.appendChild(div);
    div.style.width = `${dimensions}px`;
    div.style.height = `${dimensions}px`;
    div.style.background = `${getRandomHexColor()}`;
    dimensions = dimensions + 10;
  }
};

const destroyBoxes = () => {
  while (boxesDiv.firstChild) {
    boxesDiv.removeChild(boxesDiv.lastChild);
  }
};

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
