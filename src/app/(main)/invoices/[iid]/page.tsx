"use client";

//
import useSWR from "swr";

//
import { PDFGenerator } from "lib/components/client_index";
import { client } from "lib/services";
import { classNames } from "lib/utils";
import { usePrintDialog } from "lib/zustand";

//
import { FirstPage } from "./first_page";

const InvoicePage: React.FC<{ params: { iid: string } }> = ({
  params: { iid },
}) => {
  const isOpen = usePrintDialog((state) => state.isOpen);

  const key = iid ? `/invoices/${iid}` : null;
  const { data, isLoading } = useSWR(key, () =>
    client.invoice.getInvoice({
      query: { invoiceid: +iid },
    })
  );

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        Loading
      </div>
    );
  }

  if (data?.status !== 200) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <p>{JSON.stringify(data?.body)}</p>
      </div>
    );
  }

  return (
    <main
      id="main"
      data-testid="main"
      className={classNames(!isOpen && "pt-10 pb-20")}
    >
      <div
        id="pages"
        data-testid="pages"
        className={classNames("flex flex-col", !isOpen && "gap-y-10")}
      >
        <FirstPage data={data.body} />
      </div>
      <PDFGenerator
        filename={`invoice_#${iid}`}
        pageRanges="1"
        path={`/invoices/${iid}`}
      />
    </main>
  );
};
export default InvoicePage;
