"use strict";

let formReg = document.getElementById("form");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("password-confirm");
let genderInput = document.querySelectorAll('input[name="gender"]');

let emailError = document.querySelector(".registration__email-error");
let passwordError = document.querySelector(".registration__password-error");
let passwordConfirmError = document.querySelector(
  ".registration__password-confirm-error"
);

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function addRedStylesError(placeholder, span) {
  placeholder.style.border = "2px solid red";
  span.style.color = "red";
}
function addBaseStyle(placeholder, displayForSpan) {
  placeholder.style.border = "2px solid #787878";
  displayForSpan.style.display = "none";
}

formReg.addEventListener("submit", (event) => {
  event.preventDefault();
  genderInput.forEach((item) => {
    if (item.checked) {
      genderInput = item.value;
    }
  });

  emailInput.value?.trim();
  passwordError.value?.trim();
  passwordConfirmError.value?.trim();

  if (emailInput.value === "") {
    emailError.style.display = "inline";
    emailError.innerHTML = "Поле обязательно для заполнения";
    addRedStylesError(emailInput, emailError);
  } else if (!validateEmail(emailInput.value)) {
    emailError.style.display = "inline";
    emailError.innerHTML = "Email введён некорректно";
    addRedStylesError(emailInput, emailError);
  } else {
    addBaseStyle(emailInput, emailError);
  }

  if (passwordInput.value === "") {
    passwordError.style.display = "inline";
    passwordError.innerHTML = "Поле обязательно для заполнения";
    addRedStylesError(passwordInput, passwordError);
  }
  if (passwordInput.value.length <= 7) {
    passwordError.style.display = "inline";
    passwordError.innerHTML = "Пароль должен содержать не менее 8 символов";
    addRedStylesError(passwordInput, passwordError);
  }
  else {
    addBaseStyle(passwordInput, passwordError);
  }
  if (confirmPasswordInput.value === "") {
    passwordConfirmError.style.display = "inline";
    passwordConfirmError.innerHTML = "Поле обязательно для заполнения";
    addRedStylesError(confirmPasswordInput, passwordConfirmError);
  } else if (
    passwordInput.value === confirmPasswordInput.value &&
    passwordInput.value.length >= 7
  ) {
    addBaseStyle(passwordInput, passwordError);
    addBaseStyle(confirmPasswordInput, passwordConfirmError);
    passwordError.style.color = "#787878";
    passwordConfirmError.style.color = "#787878";
  } else {
    passwordConfirmError.style.display = "inline";
    passwordConfirmError.innerHTML = "Пароли не совпадают";
    addRedStylesError(confirmPasswordInput, passwordConfirmError);
  }

  if (
    emailInput.value !== "" &&
    passwordInput.value !== "" &&
    confirmPasswordInput.value !== "" &&
    emailError.style.display === "none" &&
    passwordError.style.display === "none" &&
    passwordConfirmError.style.display === "none"
  ) {
    console.log("email: " + emailInput.value);
    console.log("password: " + passwordInput.value);
    console.log("confirm password: " + confirmPasswordInput.value);
    console.log("gender: " + genderInput);
  }
});
