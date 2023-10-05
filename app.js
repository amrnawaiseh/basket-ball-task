const ball = document.querySelector(".ball");
const playArea = document.querySelector(".main-container");

window.addEventListener("click", (event) => {
  const innerWidth = window.innerWidth;
  const halfWidth = innerWidth / 2;
  const xCoordinate = (event.clientX - halfWidth);

  ball.style.transform = `translateX(-52%)`;
  ball.style.transition = "0s";

  ball.classList.remove("shoot");
  console.log(xCoordinate);

  setTimeout(() => {
    ball.classList.add("shoot");
    ball.style.transform = `translateX(${xCoordinate}px)`;
    ball.style.transition = "3s";
  }, 0);
});


