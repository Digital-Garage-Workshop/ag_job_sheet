export function generatePDF(element) {
  html2pdf().from(element).save();
}
