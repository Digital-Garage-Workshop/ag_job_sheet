//
import { Sheet, Table, TableHeader } from "lib/components";
import { Invoice } from "lib/services/schemas";
import { classNames } from "lib/utils";

interface IFirstPage {
  data: Invoice;
}
export const FirstPage: React.FC<IFirstPage> = ({ data }) => {
  return (
    <Sheet id="invoice" organization={data.organization}>
      <h1 className="text-center font-bold">ЗАСВАР ҮЙЛЧИЛГЭЭНИЙ НЭХЭМЖЛЭХ</h1>
      <div className="grid w-full grid-cols-2">
        {[
          { key: "Нэхэмжлэхийн дугаар", value: data.id },
          { key: "Үйлчлүүлэгчийн нэр", value: data.book.customer.name },
          { key: "Нэхэмжлэгч", value: data.organization.name },
          { key: "Утасны дугаар", value: data.book.customer.phone },
          { key: "Регистрийн дугаар", value: data.organization.regnumber },
          { key: "Автомашины улсын дугаар", value: data.book.carnumber },
          { key: "Харилцах банк", value: data.organization.payment.payment },
          { key: "Автомашины үйлдвэрлэгч", value: data.book.carmanu },
          { key: "Дансны дугаар", value: data.organization.bankacnt },
          { key: "Автомашины загвар", value: data.book.carmodel },
          { key: "Ажлын хуудасны дугаар", value: data.book.id },
          { key: "Автомашины арлын дугаар", value: data.book.vin_number },
          { key: "Нэхэмжлэх огноо", value: data.invoicedate },
          { key: "Төлбөр төлөх огноо", value: data.paymentdate },
          { key: "Төлбөл зохих нийт төлбөр", value: data.total },
        ].map(({ key, value }, index) => (
          <div
            key={index}
            className={classNames(
              "flex justify-start gap-x-2.5 text-xs",
              "even:col-start-2"
            )}
          >
            <div className="w-7/12 shrink-0 text-right font-bold">{`${key}:`}</div>
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
        {data.book.bookings.map((booking, index) => (
          <tr key={index} className="odd:bg-gray-100">
            <th colSpan={1}>
              <div className="text-center">{index + 1}</div>
            </th>
            <th colSpan={11}>
              <div className="text-center">{booking.service.category.name}</div>
            </th>
            <th colSpan={4}>
              <div className="text-center">{booking.service.id}</div>
            </th>
            <th colSpan={8}>
              <div className="text-center">{booking.service.price}</div>
            </th>
          </tr>
        ))}
        {data.book.bookings.length < 10 &&
          Array.from(Array(10 - data.book.bookings.length)).map((_, index) => (
            <tr key={index} className="odd:bg-gray-100">
              <th colSpan={1}>
                <div className="text-center">
                  {index + 1 + data.book.bookings.length}
                </div>
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
