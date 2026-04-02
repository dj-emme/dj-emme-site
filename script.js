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
