//
import { PDFGenerator } from "lib/components/client_index";
import { client } from "lib/services";
import { tryParseInt } from "lib/utils";

//
import { Invoice } from "./invoice";

const InvoicePage = async ({ params }: { params: { iid: string } }) => {
  const iid = tryParseInt(params.iid);
  if (typeof iid === "undefined" || isNaN(iid)) {
    return <div className="w-screen text-center">invalid job sheet id</div>;
  }

  const { body, status } = await client.jobSheet.getJobSheet({
    query: { bookid: iid },
  });

  if (status !== 200) {
    switch (status) {
      case 404:
        return (
          <div className="flex h-screen w-screen items-center justify-center">
            <p>{`Not Found`}</p>
          </div>
        );
      default:
        return (
          <div className="flex h-screen w-screen items-center justify-center">
            <p>{JSON.stringify(body)}</p>
          </div>
        );
    }
  }

  return (
    <main>
      <div id="invoice" className="flex flex-col gap-y-0">
        <Invoice data={body} />
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
