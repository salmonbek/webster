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

const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    // Boshqalar yopilsin
    accordions.forEach((i) => {
      if (i !== item) i.classList.remove("active");
    });
    // Shu bosilgani ochilib/yopilsin
    item.classList.toggle("active");
  });
});
const carousel = document.querySelector(".carousel");
const dots = document.querySelectorAll(".dot");

let index = 0;
const total = dots.length;

function changeSlide() {
  index = (index + 1) % total;
  carousel.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Har 2 soniyada avtomatik o‘tish
setInterval(changeSlide, 2000);

// Foydalanuvchi nuqtani bossin
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    carousel.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");
  });
});
