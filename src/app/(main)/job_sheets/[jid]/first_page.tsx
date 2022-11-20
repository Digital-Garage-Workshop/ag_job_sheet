//
import { Input, Sheet, Table, TableHeader } from "lib/components";
import { JobSheet } from "lib/services/schemas";

interface IFirstPage {
  data: JobSheet;
}
export const FirstPage: React.FC<IFirstPage> = ({ data }) => {
  const createdAt = new Date(data.created_at);

  return (
    <Sheet id="first_page" organization={data.organization}>
      <Table>
        <tr>
          <th colSpan={6}>
            {`АЖЛЫН ХУУДАС No: `}
            <span className="font-normal">{data.id}</span>
          </th>
          <td colSpan={6}></td>
        </tr>
        {/* Захиалгын мэдээлэл */}
        <TableHeader>
          <th colSpan={12}>Захиалгын мэдээлэл</th>
        </TableHeader>
        <tr>
          <td colSpan={5} className="text-center"></td>
          {["он", "сар", "өдөр", "цаг", "минут", "", ""].map((item, index) => (
            <td key={index} className="text-center">
              {item}
            </td>
          ))}
        </tr>
        <tr>
          <th colSpan={5}>Захиалга өгсөн огноо</th>
          {[
            createdAt.getFullYear(),
            createdAt.getMonth(),
            createdAt.getDate(),
            createdAt.getHours(),
            createdAt.getMinutes(),
            "",
            "",
          ].map((value, index) => (
            <td key={`${index}-${index}`}>
              {index < 5 && <div className="px-2.5">{value}</div>}
            </td>
          ))}
        </tr>
        <tr>
          <th colSpan={5}>Засвар үйлчилгээнд орсон огноо</th>
          {Array.from(Array(7)).map((value, index) => (
            <td key={`${index}-${index}`}>
              {index < 5 && <div className="px-2.5">{value}</div>}
            </td>
          ))}
        </tr>
        <tr>
          <th colSpan={5}>Засвар үйлчилгээ дууссан огноо</th>
          {Array.from(Array(7)).map((value, index) => (
            <td key={`${index}-${index}`}>
              {index < 5 && <div className="px-2.5">{value}</div>}
            </td>
          ))}
        </tr>
        {/* Автомашины мэдээлэл */}
        <TableHeader>
          <th colSpan={12}>Автомашины мэдээлэл</th>
        </TableHeader>
        <tr>
          {[
            "Үйлчлүүлэгчийн нэр",
            "Үйлчлүүлэгчийн утасны дугаар",
            "Автомашины улсын дугаар",
          ].map((item, index) => (
            <th colSpan={4} key={index}>
              {item}
            </th>
          ))}
        </tr>
        <tr>
          {[data.customer.name, data.customer.phone, data.carnumber].map(
            (value, index) => (
              <td colSpan={4} key={index}>
                <div className="px-2.5">{value}</div>
              </td>
            )
          )}
        </tr>
        <tr>
          {[
            "Автомашины үйлдвэрлэгч",
            "Автомашины модель",
            "Автомашины арлын дугаар",
          ].map((item, index) => (
            <th colSpan={4} key={index}>
              {item}
            </th>
          ))}
        </tr>
        <tr>
          {[data.carmanu, data.carmodel, data.vin_number].map(
            (value, index) => (
              <td colSpan={4} key={index}>
                <div className="px-2.5">{value}</div>
              </td>
            )
          )}
        </tr>
        {/* Үйлчлүүлэгчийн тайлбар/хийгдэх ажил */}
        <TableHeader>
          <th colSpan={12}>Үйлчлүүлэгчийн тайлбар/хийгдэх ажил</th>
        </TableHeader>
        {data.comment ? (
          <>
            <tr>
              <td colSpan={12} rowSpan={7} className="align-top">
                <div className="px-2.5">{data.comment}</div>
              </td>
            </tr>
            {Array.from(Array(6)).map((_, index) => (
              <tr key={index}>
                <td colSpan={12} className="border-none"></td>
              </tr>
            ))}
          </>
        ) : (
          Array.from(Array(6)).map((_, index) => (
            <tr key={index}>
              <td colSpan={12}></td>
            </tr>
          ))
        )}
        <tr>
          <td colSpan={12}>
            <div className="px-2.5">
              {data.bookings
                .map(
                  ({ categoryservice, service }) =>
                    `${service.category.name} ${
                      categoryservice?.name ? `: ${categoryservice.name}` : ""
                    }`
                )
                .join(", ")}
            </div>
          </td>
        </tr>
        {/* {data.bookings.map(({ categoryservice, service }, index) => (
          <tr key={index}>
            <td colSpan={12}>
              <div className="px-2.5">{`${service.category.name}: ${
                categoryservice?.name ?? ""
              }`}</div>
            </td>
          </tr>
        ))} */}
        {/* Автомашины бүрэн бүтэн байдал */}
        <TableHeader>
          <th colSpan={5}>Автомашины бүрэн бүтэн байдал</th>
          <th colSpan={7}>Тэмдэглэгээ</th>
        </TableHeader>
        <tr>
          <td colSpan={5} rowSpan={10}>
            <div className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/mkmkmk.png" alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <th colSpan={7}>
            {`Автомашины гүйлт: `}
            {data.kilometr && (
              <span className="font-normal">{`${data.kilometr}км`}</span>
            )}
          </th>
        </tr>
        {Array.from(Array(5)).map((_, index) => (
          <tr key={index}>
            <td colSpan={7}>
              <Input />
            </td>
          </tr>
        ))}
        <tr>
          <th colSpan={7} className="bg-gray-300">
            Автомашин хүлээлгэн өгсөн
          </th>
        </tr>
        <tr>
          <th colSpan={7}>
            {`Хүлээн авсан зөвлөх: `}
            <span className="font-normal">{data.createuser.name}</span>
          </th>
        </tr>
        <tr>
          <th colSpan={7}>
            {`Хүлээлгэн өгсөн харилцагч: `}
            <span className="font-normal">{data.customer.name}</span>
          </th>
        </tr>
        {/* Засвар, оношилгооны тэмдэглэл: */}
        <TableHeader>
          <th colSpan={8}>Засвар, оношилгооны тэмдэглэл:</th>
          <th colSpan={4}>
            <div style={{ display: "flex", columnGap: "0.625rem" }}>
              Оношлогооны төрөл
              <label style={{ display: "flex", columnGap: "0.25rem" }}>
                ME
                <input type="checkbox" />
              </label>
              <label style={{ display: "flex", columnGap: "0.25rem" }}>
                KO
                <input type="checkbox" />
              </label>
            </div>
          </th>
        </TableHeader>
        {Array.from(Array(6)).map((_, index) => (
          <tr key={index}>
            <td colSpan={12}>
              <div className="px-2.5">
                {data.bookings.filter((booking) => booking.rnote)[index]?.rnote}
              </div>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={6}>
            <Input />
          </td>
          <th colSpan={6}>
            {`Механикийн нэр: `}
            <span className="font-normal">
              {data.bookings.map((booking) => booking.employee.name).join(", ")}
            </span>
          </th>
        </tr>
        <tr>
          <td colSpan={6}>
            <Input />
          </td>
          <th colSpan={6}>
            {`Чанар шалгасан: `}
            <span className="font-normal">{}</span>
          </th>
        </tr>
        {/* Солих шаардлагатай сэлбэгийн мэдээлэл */}
        <TableHeader>
          <th colSpan={12}>Солих шаардлагатай сэлбэгийн мэдээлэл</th>
        </TableHeader>
        {Array.from(Array(6)).map((_, index) => (
          <tr key={index}>
            <td colSpan={12}>
              <div className="px-2.5">{data.bookings.filter(booking=> booking.comment)[index]?.comment}</div>
            </td>
          </tr>
        ))}
        {/* САНАМЖ */}
        <TableHeader>
          <th colSpan={12}>САНАМЖ</th>
        </TableHeader>
        <tr>
          <td colSpan={12}>
            <ol className="px-2.5 text-[10px]">
              {[
                `1. Та автомашиндаа үнэт эдлэл болон хувийн эд зүйлс, бусад чухал бичиг баримтаа үлдээхгүй байхыг хүсэж байна. Алдагдсан тохиолдолд ${data.organization.name} хариуцлага хүлээхгүй болно.`,
                `2. Та энэхүү хуудсан дээр гарын үсэг зурснаар автомашиныг шалгаж үзэх, туршилтын жолоодлого хийх эрхийг ${data.organization.name}-д итгэмжлэн хүлээлгэж байна.`,
                `3. Та засвар үйлчилгээний төлбөр тооцоог бүрэн барагдуулсны дараа автомашинаа хүлээн авах эрхтэй.`,
                `4. ${data.organization.name} нь засварын нэмэлт ажлыг зөвхөн харилцагчийн зөвшөөрлийн үндсэн дээр гүйцэтгэнэ.`,
                `5. Үйлчлүүлэгч та гарын үсэг зурснаар автомашинд хийгдсэн засвар үйлчилгээ болон үр дүнг хүлээн зөвшөөрч баталгаажуулж байна.`,
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </td>
        </tr>
      </Table>
    </Sheet>
  );
};
