const options = {
  html2canvas: { scrollX: 0, scrollY: 0 },
};
export function generatePDF(element, filename = new Date().toISOString()) {
  html2pdf()
    .set({ ...options, ...{ filename: `${filename}.pdf` } })
    .from(element)
    .save();
}
