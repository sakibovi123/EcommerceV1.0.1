const navbarSearchField = document.querySelector(".navbar__searchField");
const navbarSearchIcon = document.querySelector(".navbar__searchIcon");
const navbarSearchInput = document.querySelector(".navbar__searchInput");
const shop = document.querySelector(".ecommerce__shop");
const categorySection = document.querySelector(".category__section");
const mobileHamburgerBtn = document.querySelector(".mobile__hamburger");
const mobileNavSidebar = document.querySelector(".mobile__navSidebar");
const bgOverlay = document.querySelector("#bg__overlay");
const cartButton = document.querySelector(".cart__iconBtn");
const homeCart = document.querySelector("#home__cart");
const cartOverlay = document.querySelector("#cart__bgOverlay");
const closeCart = document.querySelector("#close__cart");

// Cart section starts
cartButton.addEventListener("click", () => {
  homeCart.classList.add("show__homeCart");
  cartOverlay.classList.add("show__cartOverlay");
});

closeCart.addEventListener("click", () => {
  homeCart.classList.remove("show__homeCart");
  cartOverlay.classList.remove("show__cartOverlay");
});
// Cart section ends

// Show sidebar on mobile device
mobileHamburgerBtn.addEventListener("click", () => {
  mobileNavSidebar.classList.add("show__mobileNavSidebar");
  bgOverlay.classList.add("bg__overlay");
})

// hide the shop category section the window is scrolled
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 0) {
    categorySection.style.height = 0;
    categorySection.style.opacity = 0;
    categorySection.style.visibility = "hidden";
  }
})

// Show searchbar
navbarSearchIcon.addEventListener("click", () => {
  navbarSearchField.style.right = 0;
  navbarSearchField.style.opacity = 1;
  navbarSearchField.style.visibility = "visible";
});

document.onclick = (e) => {
  if (e.target.closest(".navbar__searchIcon")) return;
  else if (e.target.closest(".navbar__searchField > form")) return;
  else if (e.target.closest(".mobile__hamburger")) return;
  else if (e.target.closest(".mobile__navSidebar")) return;
  else if (e.target.closest(".cart__iconBtn")) return;
  else if (e.target.closest("#home__cart")) return;

  navbarSearchField.style.right = "-1000vw";
  navbarSearchField.style.opacity = 0;
  navbarSearchField.style.visibility = "hidden";
  mobileNavSidebar.classList.remove("show__mobileNavSidebar");
  bgOverlay.classList.remove("bg__overlay");
  homeCart.classList.remove("show__homeCart");
  cartOverlay.classList.remove("show__cartOverlay");
};

// Category show/hide section starts
shop.addEventListener("mouseenter", () => {
  categorySection.style.height = "80vh";
  categorySection.style.opacity = 1;
  categorySection.style.visibility = "visible";
});

categorySection.addEventListener("mouseenter", () => {
  categorySection.style.height = "80vh";
  categorySection.style.opacity = 1;
  categorySection.style.visibility = "visible";
});

categorySection.addEventListener("mouseleave", () => {
  categorySection.style.height = 0;
  categorySection.style.opacity = 0;
  categorySection.style.visibility = "hidden";
});

shop.addEventListener("mouseleave", () => {
  categorySection.style.height = 0;
  categorySection.style.opacity = 0;
  categorySection.style.visibility = "hidden";
});
// Category show/hide section ends
