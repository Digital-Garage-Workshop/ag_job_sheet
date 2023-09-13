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
import { SecondPage } from "./second_page";

const JobSheetPage: React.Page<{ jid: string }> = ({ params: { jid } }) => {
  const isOpen = usePrintDialog((state) => state.isOpen);

  const key = jid ? `/job_sheets/${jid}` : null;
  const { data, isLoading } = useSWR(key, () =>
    client.jobSheet.getJobSheet({
      params: { id: jid },
    }),
  );

  if (isLoading) {
    return <Loader />;
  }

  if (data?.status !== 200) {
    return (
      <ErrorComponent
        message={`${data?.status}: ${JSON.stringify(data?.body)}`}
      />
    );
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
        <SecondPage data={data.body.data} />
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
