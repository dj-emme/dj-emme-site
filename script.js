// ENTER BUTTON - placeholder per audio e animazioni future
const enterBtn = document.getElementById("enter-btn");

enterBtn.addEventListener("click", () => {
  alert("Welcome to the rave! 🔥");
  // Qui più avanti inseriremo audio + effetti
});
// EFFETTO KICK (pulse schermo)

setInterval(() => {
  document.body.classList.add("kick");

  setTimeout(() => {
    document.body.classList.remove("kick");
  }, 120);

}, 700); // velocità del beat
// GLITCH RANDOM

const title = document.querySelector(".manifesto-title");

setInterval(() => {
  title.style.transform = "skew(" + (Math.random() * 10 - 5) + "deg)";

  setTimeout(() => {
    title.style.transform = "skew(0deg)";
  }, 100);

}, 2000);
// SHAKE LEGGERO

setInterval(() => {
  document.body.style.transform = "translateX(" + (Math.random() * 4 - 2) + "px)";

  setTimeout(() => {
    document.body.style.transform = "translateX(0px)";
  }, 80);

}, 3000);
const intro = document.getElementById("intro");

intro.addEventListener("click", () => {
  intro.classList.add("fade-out");
});
