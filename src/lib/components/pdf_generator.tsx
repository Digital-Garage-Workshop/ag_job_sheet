"use client";

//
import { DocumentChartBarIcon } from "@heroicons/react/24/solid";
import { useCallback, useState } from "react";
//
import { classNames } from "lib/utils";
import { usePrintDialog } from "lib/zustand";

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
  const [isGenerating, setIsGenerating] = useState(false);
  const _generatePDF = useCallback(async () => {
    try {
      setIsGenerating(true);
      const response = await fetch(
        "https://pdf-generator-4led.onrender.com/pdf",
        // "https://app-jobsheet.garage.mn/pdf",
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
    } finally {
      setIsGenerating(false);
    }
  }, [filename, pageRanges, path]);

  const isOpen = usePrintDialog((state) => state.isOpen);
  const setIsOpen = usePrintDialog((state) => state.setIsOpen);

  return (
    <>
      <div
        className={classNames(
          "fixed left-0 right-0 bottom-0 flex gap-x-2.5 bg-gray-400 px-10 py-2.5",
          isOpen && "invisible"
        )}
        data-testid="pdf_generator"
      >
        <button className="btn" onClick={_generatePDF}>
          {`Хэвлэх (Server)`}
        </button>
        <button
          className="btn"
          onClick={async () => {
            setIsOpen(true);
            setTimeout(() => {
              window.print();

              setIsOpen(false);
            }, 500);
          }}
        >
          {`Хэвлэх (Print Dialog)`}
        </button>
      </div>
      <div
        className={classNames(
          "absolute inset-0 flex items-center justify-center bg-black/50 duration-500",
          !isGenerating && "invisible opacity-0"
        )}
      >
        <div className="animate-bounce">
          <DocumentChartBarIcon className="h-10 w-10 text-white" />
        </div>
      </div>
    </>
  );
};
