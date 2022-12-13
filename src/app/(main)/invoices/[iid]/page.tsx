"use client";

//
import useSWR from "swr";

//
import { PDFGenerator } from "lib/components/client_index";
import { client } from "lib/services";
import { classNames } from "lib/utils";
import { usePrintDialog } from "lib/zustand";

//
import { Invoice } from "./invoice";

const InvoicePage: React.FC<{ params: { iid: string } }> = ({
  params: { iid },
}) => {
  const isOpen = usePrintDialog((state) => state.isOpen);

  const key = iid ? `/invoices/${iid}` : null;
  const { data, error } = useSWR(key, () =>
    client.jobSheet.getJobSheet({
      query: { bookid: +iid },
    })
  );

  if (!data) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        Loading
      </div>
    );
  }

  if (data.status !== 200) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <p>{JSON.stringify(data.body)}</p>
      </div>
    );
  }

  return (
    <main id="main" className={classNames(!isOpen && "pt-10 pb-20")}>
      <div id="pages" className="flex flex-col">
        <Invoice data={data.body} />
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

// //
// import { PDFGenerator } from "lib/components/client_index";
// import { client } from "lib/services";
// import { tryParseInt } from "lib/utils";

// //
// import { Invoice } from "./invoice";

// const InvoicePage = async ({ params }: { params: { iid: string } }) => {
//   const iid = tryParseInt(params.iid);
//   if (typeof iid === "undefined" || isNaN(iid)) {
//     return <div className="w-screen text-center">invalid job sheet id</div>;
//   }

//   const { body, status } = await client.jobSheet.getJobSheet({
//     query: { bookid: iid },
//   });

//   if (status !== 200) {
//     return (
//       <div className="flex h-screen w-screen items-center justify-center">
//         <p>{status}</p>
//       </div>
//     );
//   }

//   return (
//     <main id="main" className="pt-10 pb-20">
//       <div id="pages" className="flex flex-col">
//         <Invoice data={body} />
//       </div>
//       <PDFGenerator
//         filename={`invoice_#${iid}`}
//         pageRanges="1"
//         path={`/invoices/${iid}`}
//       />
//     </main>
//   );
// };
// export default InvoicePage;
