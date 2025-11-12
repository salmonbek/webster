const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mainNav = document.getElementById("main-nav");

menuBtn.addEventListener("click", () => {
  mainNav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mainNav.classList.remove("active");
});

const video = document.getElementById("heroVideo");
video.addEventListener("timeupdate", () => {
  if (video.currentTime > 105) {
    video.currentTime = 0; // qayta boshlaydi
  }
});

const bg = document.querySelector(".home-bg");
const images = [
  "../images/img1.webp",
  "../images/img2.webp",
  "../images/img3.webp",
  "../images/img4.webp",
];
let i = 0;
setInterval(() => {
  i = (i + 1) % images.length;
  bg.style.backgroundImage = `url(${images[i]})`;
}, 2000);
