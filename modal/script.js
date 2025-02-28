const modalContainer = document.querySelector(".modal-container");
const closeModal = document.querySelector(".close-modal");
const openModal = document.querySelector(".show-modal");

openModal.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
