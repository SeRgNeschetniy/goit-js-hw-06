let counterValue = 0;

const counterValueEl = document.querySelector("#value");
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');

const increment = () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
