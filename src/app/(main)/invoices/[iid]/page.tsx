"use client";

//
import useSWR from "swr";

//
import { ErrorComponent, Loader } from "lib/components";
import { PDFGenerator } from "lib/components/client_index";
import { client } from "lib/services";
import { classNames } from "lib/utils";
import { usePrintDialog } from "lib/zustand";

//
import { FirstPage } from "./first_page";

const InvoicePage: React.Page<{ iid: string }> = ({ params: { iid } }) => {
  const isOpen = usePrintDialog((state) => state.isOpen);

  const key = iid ? `/invoices/${iid}` : null;
  const { data, isLoading } = useSWR(key, () =>
    client.invoice.getInvoice({
      params: {
        id: iid,
      },
    }),
  );

  if (isLoading) {
    return <Loader />;
  }

  if (data?.status !== 200) {
    return <ErrorComponent message={JSON.stringify(data?.body)} />;
  }

  return (
    <main
      id="main"
      data-testid="main"
      className={classNames(!isOpen && "pb-20 pt-10")}
    >
      <div
        id="pages"
        data-testid="pages"
        className={classNames("flex flex-col", !isOpen && "gap-y-10")}
      >
        <FirstPage data={data.body.data} />
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
