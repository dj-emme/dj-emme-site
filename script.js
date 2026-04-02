document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro");

  if (intro) {
    intro.addEventListener("click", function () {
      intro.classList.add("fade-out");

      setTimeout(() => {
        intro.remove();
      }, 800);
    });
  }
});
