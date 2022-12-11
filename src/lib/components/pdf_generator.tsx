"use client";

//
import { useCallback } from "react";

interface IPDFGenerator {
  filename?: string;
  pageRanges?: string;
  path: string;
}
export const PDFGenerator: React.FC<IPDFGenerator> = ({
  filename = new Date().toISOString(),
  pageRanges,
  path,
}) => {
  const _generatePDF = useCallback(async () => {
    try {
      const response = await fetch(
        "https://pdf-generator-4led.onrender.com/pdf",
        {
          method: "POST",
          body: JSON.stringify({ pageRanges, path }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const pdf = await response.blob();
      const url = URL.createObjectURL(pdf);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${filename}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.log(error);
    }
  }, [filename, pageRanges, path]);

  return (
    <div className="fixed left-0 right-0 bottom-0 bg-gray-400 px-10 py-2.5">
      <button className="btn" onClick={_generatePDF}>
        Хэвлэх
      </button>
    </div>
  );
};
