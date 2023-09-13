"use client";

//
import { Loader2Icon } from "lucide-react";
import { useCallback, useState } from "react";
//
import { pdfGenerator } from "configs/default";
import { classNames } from "lib/utils";
import { usePrintDialog } from "lib/zustand";

// https://gist.github.com/kettanaito/56861aff96e6debc575d522dd03e5725
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
      const response = await fetch(`${pdfGenerator.url}/pdf`, {
        method: "POST",
        body: JSON.stringify({ pageRanges, path }),
        headers: { "Content-Type": "application/json" },
      });
      const pdf = await response.blob();
      const url = URL.createObjectURL(pdf);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${filename}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error(error);
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
          "fixed bottom-0 left-0 right-0 flex gap-x-2.5 bg-gray-400 px-10 py-2.5",
          isOpen && "invisible",
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
          !isGenerating && "invisible opacity-0",
        )}
      >
        <Loader2Icon className="h-10 w-10 animate-spin text-white" />
      </div>
    </>
  );
};
