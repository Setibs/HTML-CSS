//Hago parpadear la bola de plasma cuando se va a una sección principal

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".background-image");

  window.addEventListener("hashchange", () => {
    targets.forEach((el) => el.classList.add("blink"));

    setTimeout(() => {
      targets.forEach((el) => el.classList.remove("blink"));
    }, 1000);
  });
});
