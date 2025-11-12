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
