"use strict";

const form = document.querySelector(".formcontato__form");
const labels = document.querySelectorAll("#formcontato-label");
const inputs = document.querySelectorAll(".formcontato__input");
const textArea = document.querySelector(".formcontato__textarea");
const spans = document.querySelectorAll(".formcontato__span__required");
const emailRegex = /^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}(\.br)?$/;

const requiredFieldText =
  "Este campo é obrigatório para prosseguir. Preencha-o para continuar.";
const insufficientText =
  "Texto muito curto! Precisa ter pelo menos 3 letras. Que tal tentar de novo?";
const icorrectEmail =
  "Oops! Parece que o email que você digitou não está correto. Verifique se há erros de digitação e tente novamente.";

export function validationForm(){
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        validateName();
        validateEmail();
        validateSubject();
        validateYourMessage();
      });
}

function errorMessage(index, message) {
  if (index == 3) {
    labels[index].style.color = "red";
    labels[index].style.fontWeight = "700";

    textArea.style.border = "2px solid red";
    textArea.style.outline = "none";
    textArea.style.borderStyle = "none none solid none";

    spans[index].innerText = message.trim();
    spans[index].style.display = "block";
    spans[index].style.color = "red";
    spans[index].style.marginTop = ".5rem";
  } else {
    labels[index].style.color = "red";
    labels[index].style.fontWeight = "700";

    inputs[index].style.border = "2px solid red";
    inputs[index].style.outline = "none";
    inputs[index].style.borderStyle = "none none solid none";

    spans[index].innerText = message.trim();
    spans[index].style.display = "block";
    spans[index].style.color = "red";
    spans[index].style.marginTop = ".5rem";
  }
}

function removeErrorMessage(index) {
  if (index == 3) {
    labels[index].style.color = "";
    labels[index].style.fontWeight = "";
    textArea.style.border = "";
    spans[index].style.display = "none";
  } else {
    labels[index].style.color = "";
    labels[index].style.fontWeight = "";
    inputs[index].style.border = "";
    spans[index].style.display = "none";
  }
}

function validateName() {
  if (inputs[0].value === "") {
    errorMessage(0, requiredFieldText);
  } else if (inputs[0].value.length < 3) {
    errorMessage(0, insufficientText);
  } else {
    removeErrorMessage(0);
  }
}

function validateEmail() {
  if (inputs[1].value === "") {
    errorMessage(1, requiredFieldText);
  } else if (!emailRegex.test(inputs[1].value)) {
    errorMessage(1, icorrectEmail);
  } else {
    removeErrorMessage(1);
  }
}

function validateSubject() {
  if (inputs[2].value === "") {
    errorMessage(2, requiredFieldText);
  } else if (inputs[2].value.length < 3) {
    errorMessage(2, insufficientText);
  } else {
    removeErrorMessage(2);
  }
}

function validateYourMessage() {
  if (textArea.value === "") {
    errorMessage(3, requiredFieldText);
  } else if (textArea.value.length < 3) {
    errorMessage(3, insufficientText);
  } else {
    removeErrorMessage(3);
  }
}