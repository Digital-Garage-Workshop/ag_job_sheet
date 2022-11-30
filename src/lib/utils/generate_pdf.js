const options = {
  html2canvas: {
    scale: 4,
    scrollX: 0,
    scrollY: 0,
  },
};
export function generatePDF(element, filename = new Date().toISOString()) {
  html2pdf().set(options).from(element).save(`${filename}.pdf`);
}
