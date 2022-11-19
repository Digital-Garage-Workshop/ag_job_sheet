const options = {
  html2canvas: { scrollX: 0, scrollY: 0 },
};
export function generatePDF(element) {
  html2pdf().set(options).from(element).save();
}
