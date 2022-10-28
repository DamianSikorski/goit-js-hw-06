const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeFontSize = () => {
  text.style.fontSize = `${fontSizeControl.value / 4}px`;
};

fontSizeControl.addEventListener("input", changeFontSize);
