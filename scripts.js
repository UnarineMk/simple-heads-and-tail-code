"use strict";

let img = document.querySelector(".picture");
let flick = document.getElementById("Flick");
let again = document.getElementById("again");
let playing = true;
img.classList.add("hidden");

if ((playing = true)) {
  flick.addEventListener("click", function () {
    const calculation = Math.trunc(Math.random() * 2) + 1;

    if (calculation === 1) {
      img.classList.remove("hidden");
      img.classList.add("pictures");
      img.classList.remove("pictures2");
      img.src = `${calculation}.png`;
      console.log(calculation);
    } else {
      img.classList.remove("hidden");
      img.classList.add("pictures2");
      img.src = `${calculation}.png`;
      console.log(calculation);
    }
  });
}

again.addEventListener("click", function () {
  img.classList.add("hidden");
});
