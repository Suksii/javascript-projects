function generateRandomPassword(passwordLength) {
  const letters = "abcdefghigkelmopqrstuxyz".split("");

  const password = [];

  for (let i = 0; i < passwordLength; i++) {
    const letterIndex = Math.floor(Math.random(...letters) * letters.length);
    password.push(letters[letterIndex]);
  }
  document.querySelector(".generated-password p").innerHTML = password.join("");
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
  generateRandomPassword(passwordLengthInput.value);
});

document
  .querySelector(".generated-password i")
  .addEventListener("click", () => {
    const generatedPassword = document.querySelector(
      ".generated-password p"
    ).textContent;
    navigator.clipboard
      .writeText(generatedPassword)
      .then(() => {
        alert("Password copied successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  });
