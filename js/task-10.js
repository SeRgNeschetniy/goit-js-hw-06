function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const amountEl = document.querySelector("input");
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");

    boxEl.style.width = `${30 + i * 10}px`;
    boxEl.style.height = `${30 + i * 10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.textContent = i + 1;

    boxes.push(boxEl);
  }

  boxesEl.append(...boxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

btnCreateEl.addEventListener("click", () => {
  createBoxes(Number(amountEl.value));
});

btnDestroyEl.addEventListener("click", destroyBoxes);
