function generateRandomPassword(passwordLength) {
  const letters = "abcdefghigkelmopqrstuxyz".split("");

  const password = [];

  for (let i = 0; i < passwordLength; i++) {
    const letterIndex = Math.floor(Math.random(...letters) * letters.length);
    password.push(letters[letterIndex]);
  }
  document.querySelector(".generated-password").innerHTML = password.join("");
  return password.join("");
}
const generatePasswordButton = document.querySelector("#generate-password");
const passwordLengthInput = document.querySelector(".password-length input");
const passwordLengthValue = document.querySelector("#length");

passwordLengthInput.addEventListener("input", () => {
  passwordLengthValue.innerHTML = passwordLengthInput.value;
});
generatePasswordButton.addEventListener("click", () => {
  generateRandomPassword(passwordLengthInput.value);
});
