const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const span = document.querySelector("#value");

let counterValue = 0;

const increaseValue = () => {
  counterValue++;
  setCurrentValue();
};
const deacreaseValue = () => {
  counterValue--;
  setCurrentValue();
};

const setCurrentValue = () => {
  span.textContent = counterValue;
};

incrementBtn.addEventListener("click", increaseValue);
decrementBtn.addEventListener("click", deacreaseValue);
