function generateRandomPassword() {
  const letters = "abcdefghigkelmopqrstuxyz".split("");

  const password = [];

  for (let i = 0; i < 8; i++) {
    const letterIndex = Math.floor(Math.random(...letters) * letters.length);
    password.push(letters[letterIndex]);
  }
  document.querySelector(".generated-password").innerHTML = password.join("");
  return password.join("");
}
const generatePassword = document.querySelector("#generate-password");

generatePassword.addEventListener("click", () => {
  generateRandomPassword();
});
