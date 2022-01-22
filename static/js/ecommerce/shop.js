const minPrice = document.querySelector("#min__price");
const maxPrice = document.querySelector("#max__price");
const filteredColors = document.querySelectorAll(".filtered__colors button");
const shopProductImages = document.querySelectorAll(".shop__prodImg");
const shopFilter = document.querySelector(".mobile__filter > div");
const shopLeftSection = document.querySelector(".shop__leftSection");
const shopOverlay = document.querySelector(".shop__bgOverlay");
const hideFilterBtn = document.querySelector(".hide__filterButton");

const priceRange = (e) => {
  if (e.value) {
    maxPrice.innerText = `$${e.value}`;
  }
};

if (filteredColors.length > 0) {
  for (let i = 0; i < filteredColors.length; i++) {
    const buttonId = filteredColors[i].id;
    const color = buttonId.split("-")[1].toLowerCase();
    const getButton = document.getElementById(buttonId);
    getButton.style.backgroundColor = color;
  }
}

const preloadImg = (img) => {
  const src = img.getAttribute("data-src");

  if (!src) return;

  img.src = src;
};

const imgObserver = new IntersectionObserver(
  (entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      preloadImg(entry.target);
      imgObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.3,
  }
);

shopProductImages.forEach((img) => {
  imgObserver.observe(img);
});

shopFilter.addEventListener("click", () => {
    shopLeftSection.classList.add("show__shopLeftSection");
    shopOverlay.classList.add("show__shopbgOverlay");
});

hideFilterBtn.addEventListener("click", () => {
    shopLeftSection.classList.remove("show__shopLeftSection");
    shopOverlay.classList.remove("show__shopbgOverlay");
});

document.addEventListener("click", (e) => {
    if (e.target.closest(".mobile__filter > div")) return;
    else if (e.target.closest(".shop__leftSection")) return;

    shopLeftSection.classList.remove("show__shopLeftSection");
    shopOverlay.classList.remove("show__shopbgOverlay");
})