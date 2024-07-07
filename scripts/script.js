"use strict";

import { downloadPDF, pdfLink } from "./download_curriculum.js";
import { validationForm } from "./validation.js";

let widthDevice = window.innerWidth;

pdfLink.addEventListener("click", function () {
  if (widthDevice <= 1024) {
    downloadPDF();
  }
});

// Validação do formulário
validationForm();
