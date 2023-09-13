//
import dayjs from "dayjs";
import { Sheet, Table, TableHeader } from "lib/components";
import { Booking, Invoice } from "lib/services/schemas";
import { classNames } from "lib/utils";

interface IFirstPage {
  data: Invoice;
}
export const FirstPage: React.FC<IFirstPage> = ({ data }) => {
  const generalInfo = [
    { key: "Нэхэмжлэхийн дугаар", value: data.id },
    { key: "Үйлчлүүлэгчийн нэр", value: data.customer.name },
    { key: "Нэхэмжлэгч", value: data.organization.name },
    { key: "Утасны дугаар", value: data.customer.phone },
    { key: "Регистрийн дугаар", value: data.organization.regnumber },
    { key: "Автомашины улсын дугаар", value: data.carnumber },
    { key: "Харилцах банк", value: data.organization.bank },
    { key: "Автомашины үйлдвэрлэгч", value: data.carmanu },
    { key: "Дансны дугаар", value: data.organization.account },
    { key: "Автомашины загвар", value: data.carmodel },
    { key: "Ажлын хуудасны дугаар", value: data.id },
    { key: "Автомашины арлын дугаар", value: data.vin_number },
    {
      key: "Нэхэмжлэх огноо",
      value: dayjs(new Date()).format("YYYY-MM-DD"),
    },
    {
      key: "Төлбөр төлөх огноо",
      value: dayjs(new Date()).format("YYYY-MM-DD"),
    },
    { key: "Төлбөл зохих нийт төлбөр", value: data.totalamount },
  ];
  const bookings = [
    ...data.bookings.slice(0, 10),
    ...(data.bookings.length < 10
      ? Array<null>(10 - data.bookings.length).fill(null)
      : []),
  ];
  const parts = bookings
    .map((booking) => (booking ? booking.parts : null))
    .flat();

  return (
    <Sheet id="invoice" organization={data.organization} branch={data.branch}>
      <h1 className="text-center font-bold">ЗАСВАР ҮЙЛЧИЛГЭЭНИЙ НЭХЭМЖЛЭХ</h1>
      <div className="grid w-full grid-cols-2">
        {generalInfo.map(({ key, value }, index) => (
          <div
            key={index}
            className={classNames(
              "flex justify-start gap-x-2.5 text-xs",
              "even:col-start-2",
            )}
          >
            <div className="w-7/12 shrink-0 text-right font-bold">{`${key}:`}</div>
            <div>{value}</div>
          </div>
        ))}
      </div>
      <Table className="[&_th]:w-[4.166667%]" columns={24}>
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
        {bookings.map((booking, index) => (
          <tr key={index} className="odd:bg-gray-100">
            <th colSpan={1}>
              <div className="text-center">{index + 1}</div>
            </th>
            <th colSpan={11}>
              <div className="text-center">{booking?.category.name}</div>
            </th>
            <th colSpan={4}>
              <div className="text-center">{booking?.id}</div>
            </th>
            <th colSpan={8}>
              <div className="text-center">{booking?.servicebill}</div>
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
        {parts.map((part, index) => (
          <tr key={index} className="odd:bg-gray-100">
            <th colSpan={1}>
              <div className="text-center">{index + 1}</div>
            </th>
            <th colSpan={6}>
              <div className="text-center">{part?.category}</div>
            </th>
            <th colSpan={3}>
              <div className="text-center">{part?.brandname}</div>
            </th>
            <th colSpan={4}>
              <div className="text-center">{part?.articleno}</div>
            </th>
            <th colSpan={2}>
              <div className="text-center">{part?.quantity}</div>
            </th>
            <th colSpan={4}>
              <div className="text-center">{part?.price}</div>
            </th>
            <th colSpan={4}>
              <div className="text-center">{part?.total}</div>
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
      </Table>
      <Table
        className="mt-10 [&_td]:border-none [&_td]:px-2.5 [&_th]:w-[4.166667%]"
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
