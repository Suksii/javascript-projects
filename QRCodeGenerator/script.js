const inputValue = document.querySelector(".input input");
const button = document.querySelector(".container button");
const image = document.querySelector(".qr-img img");
const error = document.querySelector("#error");

button.addEventListener("click", () => {
  if (inputValue.value.trim() === "") {
    error.innerHTML = "Input field is empty";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    return;
  }
  image.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    inputValue.value;
  image.alt = inputValue.value;
  document.querySelector(".qr-img").classList.add("show-img");
});
