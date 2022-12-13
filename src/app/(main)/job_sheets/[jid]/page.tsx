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
import { SecondPage } from "./second_page";

const JobSheetPage: React.FC<{ params: { jid: string } }> = ({
  params: { jid },
}) => {
  const isOpen = usePrintDialog((state) => state.isOpen);

  const key = jid ? `/job_sheets/${jid}` : null;
  const { data, error } = useSWR(key, () =>
    client.jobSheet.getJobSheet({
      query: { bookid: +jid },
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
      <div
        id="pages"
        className={classNames("flex flex-col", !isOpen && "gap-y-10")}
      >
        <FirstPage data={data.body} />
        <SecondPage data={data.body} />
      </div>
      <PDFGenerator
        filename={`job_sheet_#${jid}`}
        pageRanges="1-2"
        path={`/job_sheets/${jid}`}
      />
    </main>
  );
};
export default JobSheetPage;

// //
// import { PDFGenerator } from "lib/components/client_index";
// import { client } from "lib/services";
// import { tryParseInt } from "lib/utils";

// //
// import { FirstPage } from "./first_page";
// import { SecondPage } from "./second_page";

// const JobSheetPage = async ({ params }: { params: { jid: string } }) => {
//   const jid = tryParseInt(params.jid);
//   if (typeof jid === "undefined" || isNaN(jid)) {
//     return <div className="w-screen text-center">invalid job sheet id</div>;
//   }

//   const { body, status } = await client.jobSheet.getJobSheet({
//     query: { bookid: jid },
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
//       <div id="pages" className="flex flex-col gap-y-10">
//         <FirstPage data={body} />
//         <SecondPage data={body} />
//       </div>
//       <PDFGenerator
//         filename={`job_sheet_#${jid}`}
//         pageRanges="1-2"
//         path={`/job_sheets/${jid}`}
//       />
//     </main>
//   );
// };
// export default JobSheetPage;
