function generateRandomPassword(passwordLength) {
  const lowerCaseLetters = "abcdefghigkelmopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_+=<>?";

  const password = [];

  var letters = "";
  const lowerCaseChecked = document.querySelector("#lowercase-letters").checked;
  const upperCaseChecked = document.querySelector("#uppercase-letters").checked;
  const numbersChecked = document.querySelector("#numbers").checked;
  const symbolsChecked = document.querySelector("#symbols").checked;

  if (lowerCaseChecked) {
    letters += lowerCaseLetters;
  }
  if (upperCaseChecked) {
    letters += upperCaseLetters;
  }
  if (symbolsChecked) {
    letters += symbols;
  }
  if (numbersChecked) {
    letters += numbers;
  }

  if (letters.length === 0) {
    alert("Please select at least one option");
    return "";
  }
  for (let i = 0; i < passwordLength; i++) {
    const letterIndex = Math.floor(Math.random() * letters.length);
    password.push(letters[letterIndex]);
  }
  document.querySelector(".generated-password p").textContent =
    password.join("");
  return password.join("");
}

const generatePasswordButton = document.querySelector("#generate-password");
const passwordLengthInput = document.querySelector(".password-length input");
const passwordLengthValue = document.querySelector("#length");

passwordLengthValue.textContent = passwordLengthInput.value;

passwordLengthInput.addEventListener("input", () => {
  passwordLengthValue.innerHTML = passwordLengthInput.value;
});
generatePasswordButton.addEventListener("click", () => {
  const message = document.querySelector(".generated-password span");
  if (message) message.remove();
  generateRandomPassword(passwordLengthInput.value);
});

document
  .querySelector(".generated-password i")
  .addEventListener("click", () => {
    const generatedPassword = document.querySelector(
      ".generated-password p"
    ).textContent;
    if (generatedPassword.length === 0) {
      alert("You cannot copy empty field");
      return;
    }
    navigator.clipboard
      .writeText(generatedPassword)
      .then(() => {
        alert("Password copied successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  });
