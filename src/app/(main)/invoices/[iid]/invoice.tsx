//
import { Sheet, Table, TableHeader } from "lib/components";
import { JobSheet } from "lib/services/schemas";
import { classNames } from "lib/utils";

interface IInvoice {
  data: JobSheet;
}
export const Invoice: React.FC<IInvoice> = ({ data }) => {
  const mechanics = data.bookings
    .map((booking) => booking.employee)
    .filter(
      (employee, index, self) =>
        index === self.findIndex((item) => item.id === employee.id)
    );

  return (
    <Sheet id="invoice" organization={data.organization}>
      <h1 className="text-center font-bold">ЗАСВАР ҮЙЛЧИЛГЭЭНИЙ НЭХЭМЖЛЭХ</h1>
      <div className="grid w-full grid-cols-2">
        {[
          { key: "Нэхэмжлэхийн дугаар", value: "" },
          { key: "Үйлчлүүлэгчийн нэр", value: "" },
          { key: "Нэхэмжлэгч", value: "" },
          { key: "Утасны дугаар", value: "" },
          { key: "Регистрийн дугаар", value: "" },
          { key: "Автомашины улсын дугаар", value: "" },
          { key: "Харилцах банк", value: "" },
          { key: "Автомашины үйлдвэрлэгч", value: "" },
          { key: "Дансны дугаар", value: "" },
          { key: "Автомашины загвар", value: "" },
          { key: "Ажлын хуудасны дугаар", value: "" },
          { key: "Автомашины арлын дугаар", value: "" },
          { key: "Нэхэмжэх огноо", value: "" },
          { key: "Төлбөр төлөх огноо", value: "" },
          { key: "Төлбөл зохих нийт төлбөр", value: "" },
        ].map(({ key, value }, index) => (
          <div
            key={index}
            className={classNames(
              "flex justify-start gap-x-2.5 text-xs",
              "even:col-start-2"
            )}
          >
            <div className="w-7/12 text-right font-bold">{`${key}:`}</div>
            <div>{value}</div>
          </div>
        ))}
      </div>
      <Table className="[&_th]:w-[4.166667%]" columns={24}>
        {/* Автомашины ерөнхий үзлэгийн мэдээлэл */}
        <TableHeader>
          <th colSpan={1}>
            <div className="text-center">№</div>
          </th>
          <th colSpan={11}>
            <div className="text-center">Хийгдсэн ажлын нэр</div>
          </th>
          <th colSpan={4}>
            <div className="text-center">Ажлын дугаар</div>
          </th>
          <th colSpan={8}>
            <div className="text-center">Ажлын төлбөр</div>
          </th>
        </TableHeader>
        {Array.from(Array(10)).map((_, index) => (
          <tr key={index} className="odd:bg-gray-100">
            <th colSpan={1}>
              <div className="text-center">{index + 1}</div>
            </th>
            <th colSpan={11}>
              <div className="text-center"></div>
            </th>
            <th colSpan={4}>
              <div className="text-center"></div>
            </th>
            <th colSpan={8}>
              <div className="text-center"></div>
            </th>
          </tr>
        ))}
        <tr>
          <th colSpan={1} className="border-none">
            <div className="text-center"></div>
          </th>
          <th colSpan={11} className="border-none">
            <div className="text-center"></div>
          </th>
          <th colSpan={4}>
            <div className="text-center">Нийт дүн:</div>
          </th>
          <th colSpan={8}>
            <div className="text-center"></div>
          </th>
        </tr>
        <tr>
          <th colSpan={1} className="border-none">
            <div className="text-center"></div>
          </th>
          <th colSpan={11} className="border-none">
            <div className="text-center"></div>
          </th>
          <th colSpan={4}>
            <div className="text-center">Хөнгөлөлт:</div>
          </th>
          <th colSpan={8}>
            <div className="text-center"></div>
          </th>
        </tr>
        <tr>
          <th colSpan={1} className="border-none">
            <div className="text-center"></div>
          </th>
          <th colSpan={11} className="border-none">
            <div className="text-center"></div>
          </th>
          <th colSpan={4}>
            <div className="text-center">Нийт төлбөр:</div>
          </th>
          <th colSpan={8} className="bg-gray-300">
            <div className="text-center"></div>
          </th>
        </tr>
      </Table>
      <Table className="[&_th]:w-[4.166667%]" columns={24}>
        {/* Автомашины ерөнхий үзлэгийн мэдээлэл */}
        <TableHeader>
          <th colSpan={1}>
            <div className="text-center">№</div>
          </th>
          <th colSpan={6}>
            <div className="text-center">Сэлбэгийн нэр</div>
          </th>
          <th colSpan={3}>
            <div className="text-center">Сэлбэгийн брэнд</div>
          </th>
          <th colSpan={4}>
            <div className="text-center">Сэлбэгийн дугаар</div>
          </th>
          <th colSpan={2}>
            <div className="text-center">Тоо ширхэг</div>
          </th>
          <th colSpan={4}>
            <div className="text-center">Нэгж үнэ</div>
          </th>
          <th colSpan={4}>
            <div className="text-center">Нийт үнэ</div>
          </th>
        </TableHeader>
        {Array.from(Array(10)).map((_, index) => (
          <tr key={index} className="odd:bg-gray-100">
            <th colSpan={1}>
              <div className="text-center">{index + 1}</div>
            </th>
            <th colSpan={6}>
              <div className="text-center"></div>
            </th>
            <th colSpan={3}>
              <div className="text-center"></div>
            </th>
            <th colSpan={4}>
              <div className="text-center"></div>
            </th>
            <th colSpan={2}>
              <div className="text-center"></div>
            </th>
            <th colSpan={4}>
              <div className="text-center"></div>
            </th>
            <th colSpan={4}>
              <div className="text-center"></div>
            </th>
          </tr>
        ))}
        <tr>
          <th className="border-none" colSpan={12}>
            <div className="text-center"></div>
          </th>
          <th colSpan={4}>
            <div className="text-center">Нийт дүн:</div>
          </th>
          <th colSpan={8}>
            <div className="text-center"></div>
          </th>
        </tr>
        <tr>
          <th className="border-none" colSpan={12}>
            <div className="text-center"></div>
          </th>
          <th colSpan={4}>
            <div className="text-center">Хөнгөлөлт:</div>
          </th>
          <th colSpan={8}>
            <div className="text-center"></div>
          </th>
        </tr>
        <tr>
          <th className="border-none" colSpan={12}>
            <div className="text-center"></div>
          </th>
          <th colSpan={4}>
            <div className="text-center">Нийт төлбөр:</div>
          </th>
          <th className="bg-gray-300" colSpan={8}>
            <div className="text-center"></div>
          </th>
        </tr>

        {/* Засвар, оношилгооны нэмэлт тэмдэглэл */}
      </Table>
      <Table
        className="mt-10 [&_th]:w-[4.166667%] [&_td]:border-none [&_td]:px-2.5"
        columns={24}
      >
        <tr>
          <td className="text-right" colSpan={8}>{`Нэхэмжлэх бэлтгэсэн:`}</td>
          <td className="text-right" colSpan={5}>{`Засварын зөвлөх`}</td>
          <td colSpan={4}>{`..........................................`}</td>
          <td colSpan={6}>{`/`}</td>
          <td colSpan={1}>{`/`}</td>
        </tr>
        <tr>
          <td
            className="text-right"
            colSpan={8}
          >{`Төлбөрийг хүлээн зөвшөөрсөн:`}</td>
          <td className="text-right" colSpan={5}>{`Үйлчлүүлэгч`}</td>
          <td colSpan={4}>{`..........................................`}</td>
          <td colSpan={6}>{`/`}</td>
          <td colSpan={1}>{`/`}</td>
        </tr>
      </Table>
    </Sheet>
  );
};
