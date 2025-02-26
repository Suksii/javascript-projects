const inputValue = document.querySelector(".input input");
const button = document.querySelector(".container button");
const image = document.querySelector(".qr-img img");

button.addEventListener("click", () => {
  image.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    inputValue.value;
  image.alt = inputValue.value;
});