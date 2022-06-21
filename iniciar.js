const boton = document.querySelector("#boton");
const inicioContainer = document.querySelector(".inicioContainer");
const sonido = new Audio();
sonido.src = "media/Audios/inicio.mp3";

boton.addEventListener("click", () => {
  sonido.play();
  inicioContainer.className += " desaparecer";
  setTimeout(() => {
    inicioContainer.parentElement.removeChild(inicioContainer);
  }, 1250);
});
