const emailInput = document.getElementById("emailInput");
const errorMessage = document.querySelector(".error-message");

emailInput.addEventListener("input", function () {
  let emailValue = emailInput.value;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Проверка на некорректный формат email
  if (!emailPattern.test(emailValue)) {
    errorMessage.style.display = "block"; // Показываем сообщение об ошибке
  } else {
    errorMessage.style.display = "none"; // Скрываем сообщение об ошибке
  }
});
