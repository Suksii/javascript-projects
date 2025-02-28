const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close-modal-button");
const showModalButton = document.querySelector(".show-modal-button");

showModalButton.addEventListener("click", () => {
  modalContainer.classList.add("open-modal");
  modal.style.transform = "scale(1)";
});

closeModalButton.addEventListener("click", () => {
  modalContainer.classList.remove("open-modal");
  modal.style.transform = "scale(0.3)";
});
