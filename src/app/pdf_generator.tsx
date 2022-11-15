"use client";

//
import { useCallback } from "react";

//
import { generatePDF } from "./generate_pdf";

export const PDFGenerator: React.FC = () => {
  const _generatePDF = useCallback(() => {
    const element = document.getElementById("job_sheet");

    if (element) {
      generatePDF(element);
    }
  }, []);

  return (
    <div className="fixed left-0 right-0 bottom-0 bg-gray-400 px-10 py-2.5">
      <button className="btn" onClick={_generatePDF}>
        Хэвлэх
      </button>
    </div>
  );
};
