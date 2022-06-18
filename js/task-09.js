function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

btnChangeColor.addEventListener("click", () => {
  const changeColor = getRandomHexColor();
  color.textContent = changeColor;
  document.body.style.backgroundColor = changeColor;
});
