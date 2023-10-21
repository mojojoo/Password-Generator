/** @format */
const passwordsGen = [
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0123456789",
  "*$#&_-!/?|~+^><%",
];

const inputElement = document.querySelector(".rangeInput");
const buttonElement = document.querySelector("button");
const passElements = document.querySelectorAll(".pass");
const lengthNumber = document.querySelector(".length");
const headElement = document.querySelector(".generatePass");

inputElement.addEventListener("change", () => {
  lengthNumber.innerHTML = inputElement.value;
});

function generateRandom() {
  const value = inputElement.value;
  const passCopy = [...passwordsGen];
  const myPass = passCopy[0] + passCopy[1] + (passCopy[2] + passCopy[3]);
  const copy = [...myPass.split("")];

  const randomPass = [];

  while (randomPass.length < value) {
    const randomIndex = Math.floor(Math.random() * copy.length);
    randomPass.push(copy[randomIndex]);
    copy.splice(randomIndex, 1);
  }
  headElement.innerHTML = randomPass.join("");
}

buttonElement.addEventListener("click", () => {
  generateRandom();
});

const wrappper = document.querySelector(".wrappers");
const okayBtn = document.querySelector(".okay");
wrappper.style.display = "flex";

okayBtn.addEventListener("click", () => {
  wrappper.style.display = "none";
});
