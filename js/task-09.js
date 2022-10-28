const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeBackground = () => {
  document.body.style.background = `${getRandomHexColor()}`;
  colorSpan.textContent = `${getRandomHexColor()}`;
};

changeColorBtn.addEventListener("click", changeBackground);
