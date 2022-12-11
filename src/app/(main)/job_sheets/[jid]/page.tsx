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
    return <div className="w-screen text-center">{JSON.stringify(body)}</div>;
  }

  return (
    <main className="pt-10 pb-20">
      <div id="job_sheet" className="flex flex-col gap-y-0">
        <FirstPage data={body} />
        <SecondPage data={body} />
      </div>
      <PDFGenerator elemendId="job_sheet" filename={`job_sheet_#${jid}`} />
    </main>
  );
};
export default JobSheetPage;
