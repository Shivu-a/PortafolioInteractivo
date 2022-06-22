const background = document.querySelector(".background");
console.log(window.innerHeight);
console.log(window.innerWidth);

for (let i = 0; i < 150; i++) {
  let star = document.createElement("div");
  star.style.width = "5vw";
  star.style.height = "5vh";
  star.style.borderRadius = "50%";
  star.style.backgroundColor = "white";
  star.style.position = "relative";
  star.style.top = Math.floor(Math.floor() * window.innerHeight);
  star.style.left = Math.floor(Math.floor() * window.innerWidth);
  background.appendChild(star);
}
