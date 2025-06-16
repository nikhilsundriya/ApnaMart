const searchForm = document.querySelector(".search-form");
const shoppingCart = document.querySelector(".shopping-cart");
const loginForm = document.querySelector(".login-form");
const navbar = document.querySelector(".navbar");

const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const loginBtn = document.querySelector("#login-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
});

cartBtn.addEventListener("click", () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
});

loginBtn.addEventListener("click", () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
});

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
});

window.addEventListener("scroll", () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
});

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
