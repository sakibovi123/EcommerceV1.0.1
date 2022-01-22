const wishlistProdImg = document.querySelectorAll(".wishlist__prodImg");

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

wishlistProdImg.forEach((img) => {
  imgObserver.observe(img);
});
