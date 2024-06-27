"use strict";

import { downloadPDF, pdfLink } from "./download_curriculum.js";

let widthDevice = window.innerWidth;

pdfLink.addEventListener("click", function () {
    if (widthDevice <= 1024) {
        downloadPDF();
    }
});





