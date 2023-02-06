//
import { Input, Sheet, Table, TableHeader } from "lib/components";
import { JobSheet } from "lib/services/schemas";

interface ISecondPage {
  data: JobSheet;
}
export const SecondPage: React.FC<ISecondPage> = ({ data }) => {
  const mechanics = data.bookings
    .map((booking) => booking.employee)
    .filter(
      (employee, index, self) =>
        index === self.findIndex((item) => item.id === employee.id)
    );

  return (
    <Sheet id="second_page" organization={data.organization}>
      <Table>
        {/* Автомашины ерөнхий үзлэгийн мэдээлэл */}
        <TableHeader>
          <th colSpan={12}>Автомашины ерөнхий үзлэгийн мэдээлэл</th>
        </TableHeader>
        <tr>
          <th colSpan={4}>
            <div className="text-center">Эд ангийн нэр</div>
          </th>
          <th colSpan={2}>
            <div className="text-center">Хэвийн</div>
          </th>
          <th colSpan={2}>
            <div className="text-center">Хэвийн биш</div>
          </th>
          <th colSpan={4}>
            <div className="text-center">Нэмэлт тайлбар</div>
          </th>
        </tr>
        {[
          "Урд наклад",
          "Урд тоормосны диск (Пиланз)",
          "Хойд наклад",
          "Хойд тоормосны диск (Пиланз)",
          "Дугуйн хээ",
          "Шил арчигчийн резин",
          "Шил арчигчийн шингэн",
          "Тоормосны шингэний түвшин",
          "Хөдөлгүүрийн тосны түвшин",
          "Хөргөлтийн шингэний түвшин",
          "Холын гэрэл",
          "Ойрын гэрэл",
          "Манангийн гэрэл (урд)",
          "Оврын гэрэл (урд)",
          "Дохионы гэрэл (урд)",
          "Тоормосны гэрэл",
          "Оврын гэрэл (хойд)",
          "Дохионы гэрэл (хойд)",
          "Ухрахын гэрэл",
          "Улсын дугаарын гэрэл",
          "Манангийн гэрэл (хойд)",
        ].map((item, index) => (
          <tr key={index}>
            <th colSpan={4}>{item}</th>
            <td colSpan={2}>
              <div className="flex items-center justify-center">
                <input type="checkbox" />
              </div>
            </td>
            <td colSpan={2}>
              <div className="flex items-center justify-center">
                <input type="checkbox" />
              </div>
            </td>
            <td colSpan={4}>
              <Input />
            </td>
          </tr>
        ))}
        {/* Засвар, оношилгооны нэмэлт тэмдэглэл */}
        <TableHeader>
          <th colSpan={12}>Засвар, оношилгооны нэмэлт тэмдэглэл</th>
        </TableHeader>
        {Array.from(Array(12)).map((_, index) => (
          <tr key={index}>
            <td colSpan={12}>
              <div className="px-2.5">{data.bookings[index]?.rnotes}</div>
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
              {mechanics.map((employee) => employee.name).join(", ")}
            </span>
          </th>
        </tr>
        {/* Автомашин хүлээлгэн өгсөн тэмдэглэгээ */}
        <TableHeader>
          <th colSpan={8}>Автомашин хүлээлгэн өгсөн тэмдэглэгээ</th>
          <th colSpan={4}>Огноо</th>
        </TableHeader>
        <tr>
          <th colSpan={8}>Хүлээлгэн өгсөн зөвлөх:</th>
          <td colSpan={4} className="!px-2.5">
            202....оны .......сарын ......... өдөр
          </td>
        </tr>
        <tr>
          <th colSpan={8}>Хүлээн авсан харилцагч:</th>
          <td colSpan={4} className="!px-2.5">
            202....оны .......сарын ......... өдөр
          </td>
        </tr>
        {/* САНАМЖ */}
        <TableHeader>
          <th colSpan={12}>САНАМЖ</th>
        </TableHeader>
        <tr>
          <td colSpan={12}>
            <ol className="px-2.5 text-[10px]">
              {[
                `1. Та автомашинаа сайтар шалгаж авах шаардлагатай бөгөөд засварын төвөөс гарснаас хойших гомдолд ${data.organization.name} хариуцлага хүлээхгүй`,
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
