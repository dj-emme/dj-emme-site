const intro = document.getElementById("intro");

intro.addEventListener("click", () => {
  intro.classList.add("fade-out");

  setTimeout(() => {
    intro.remove();
  }, 800);
});
