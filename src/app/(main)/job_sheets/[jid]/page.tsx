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
  const { data, isLoading } = useSWR(key, () =>
    client.jobSheet.getJobSheet({
      query: { bookid: +jid },
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
