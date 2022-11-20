"use client";

//
import { useCallback } from "react";

//
import { generatePDF } from "lib/utils/generate_pdf";

interface IPDFGenerator {
  filename?: string;
}
export const PDFGenerator: React.FC<IPDFGenerator> = ({ filename }) => {
  const _generatePDF = useCallback(() => {
    const element = document.getElementById("job_sheet");

    if (element) {
      generatePDF(element, filename);
    }
  }, [filename]);

  return (
    <div className="fixed left-0 right-0 bottom-0 bg-gray-400 px-10 py-2.5">
      <button className="btn" onClick={_generatePDF}>
        Хэвлэх
      </button>
    </div>
  );
};
