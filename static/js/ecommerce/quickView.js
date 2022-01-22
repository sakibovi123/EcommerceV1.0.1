const quickViewModal = document.querySelector(".quick__viewModal");
const quickViewOverlay = document.querySelector("#quick__viewOverlay");
const closeQuickModal = document.querySelector("#close__quickModal");

const quickView = (prodId) => {
  if (prodId) {
    const product = document.querySelector(`#home__product${prodId}`);

    quickViewModal.classList.add("show__quickViewModal");
    quickViewOverlay.classList.add("show__quickOverlay");
  }
};

closeQuickModal.addEventListener("click", () => {
  quickViewModal.classList.remove("show__quickViewModal");
  quickViewOverlay.classList.remove("show__quickOverlay");
})

document.addEventListener("click", (e) => {
  if (e.target.closest(".quick__viewBtn")) return;
  else if (e.target.closest(".quick__viewModalCard")) return;

  quickViewModal.classList.remove("show__quickViewModal");
  quickViewOverlay.classList.remove("show__quickOverlay");
});
