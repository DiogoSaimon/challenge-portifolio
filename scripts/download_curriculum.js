'use strict';

const curriculumFile = "/assets/my_curriculum/Currículo Linkedin Diogo 2024.pdf";

export const pdfLink = document.getElementById('curriculum-btn');

export const downloadPDF = () => {
    pdfLink.removeAttribute("target");
    pdfLink.href = curriculumFile;
    
    fetch(pdfLink.href)
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);

            const downloadElement = document.createElement('a');
            downloadElement.style = "display: none";
            downloadElement.href = url;
            downloadElement.download = "Diogo Saimon.pdf";
            downloadElement.click();
            window.URL.revokeObjectURL(url);
        });
};



