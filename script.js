const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.onclick = () => {
  navMenu.classList.toggle("active");
};
