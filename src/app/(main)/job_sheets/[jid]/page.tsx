//
import { PDFGenerator } from "lib/components/client_index";
import { client } from "lib/services";
import { tryParseInt } from "lib/utils";

//
import { FirstPage } from "./first_page";
import { SecondPage } from "./second_page";

const JobSheetPage = async ({ params }: { params: { jid: string } }) => {
  const jid = tryParseInt(params.jid);
  if (typeof jid === "undefined" || isNaN(jid)) {
    return <div className="w-screen text-center">invalid job sheet id</div>;
  }

  const { body, status } = await client.jobSheet.getJobSheet({
    query: { bookid: jid },
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
    <main className="pb-20">
      <div id="job_sheet" className="flex flex-col">
        <FirstPage data={body} />
        <SecondPage data={body} />
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
