//
import { Input, Sheet, Table, TableHeader } from "lib/components";

//
import { PDFGenerator } from "./pdf_generator";

const HomePage = async () => {
  return (
    <main className="mx-auto max-w-min pt-10 pb-20">
      <div id="job_sheet" className="flex flex-col gap-y-0">
        <FirstPage />
        <SecondPage />
      </div>
      <PDFGenerator />
    </main>
  );
};
export default HomePage;

const FirstPage: React.FC = () => {
  return (
    <Sheet id="first_page">
      <Table>
        <tr>
          <th colSpan={6}>
            АЖЛЫН ХУУДАС No:
            {/* <Input label="АЖЛЫН ХУУДАС No:" /> */}
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
        {[
          "Захиалга өгсөн огноо",
          "Засвар үйлчилгээнд орсон огноо",
          "Засвар үйлчилгээ дууссан огноо",
        ].map((item, index) => (
          <tr key={index}>
            <th colSpan={5}>{item}</th>
            {Array.from(Array(7)).map((_, _index) => (
              <td key={`${index}-${_index}`}>{_index < 5 && <Input />}</td>
            ))}
          </tr>
        ))}
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
          {Array.from(Array(3)).map((_, index) => (
            <td colSpan={4} key={index}>
              <Input />
            </td>
          ))}
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
          {Array.from(Array(3)).map((_, index) => (
            <td colSpan={4} key={index}>
              <Input />
            </td>
          ))}
        </tr>
        {/* Үйлчлүүлэгчийн тайлбар/хийгдэх ажил */}
        <TableHeader>
          <th colSpan={12}>Үйлчлүүлэгчийн тайлбар/хийгдэх ажил</th>
        </TableHeader>
        {Array.from(Array(6)).map((_, index) => (
          <tr key={index}>
            <td colSpan={12}>
              <Input />
            </td>
          </tr>
        ))}
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
          <th colSpan={7}>Автомашины гүйлт:</th>
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
          <th colSpan={7}>Хүлээн авсан зөвлөх:</th>
        </tr>
        <tr>
          <th colSpan={7}>Хүлээлгэн өгсөн харилцагч:</th>
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
              <Input />
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={6}>
            <Input />
          </td>
          <th colSpan={6}>Механикийн нэр:</th>
        </tr>
        <tr>
          <td colSpan={6}>
            <Input />
          </td>
          <th colSpan={6}>Чанар шалгасан:</th>
        </tr>
        {/* Солих шаардлагатай сэлбэгийн мэдээлэл */}
        <TableHeader>
          <th colSpan={12}>Солих шаардлагатай сэлбэгийн мэдээлэл</th>
        </TableHeader>
        {Array.from(Array(6)).map((_, index) => (
          <tr key={index}>
            <td colSpan={12}>
              <Input />
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
                `1. Та автомашиндаа үнэт эдлэл болон хувийн эд зүйлс, бусад чухал бичиг баримтаа үлдээхгүй байхыг хүсэж байна. Алдагдсан тохиолдолд "Трү даззл" ХХК хариуцлага хүлээхгүй болно.`,
                `2. Та энэхүү хуудсан дээр гарын үсэг зурснаар автомашиныг шалгаж үзэх, туршилтын жолоодлого хийх эрхийг "Трү Даззл" ХХК-д итгэмжлэн хүлээлгэж байна.`,
                `3. Та засвар үйлчилгээний төлбөр тооцоог бүрэн барагдуулсны дараа автомашинаа хүлээн авах эрхтэй.`,
                `4. "Трү Даззл" ХХК нь засварын нэмэлт ажлыг зөвхөн харилцагчийн зөвшөөрлийн үндсэн дээр гүйцэтгэнэ.`,
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
const SecondPage: React.FC = () => {
  return (
    <Sheet id="second_page">
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
              <Input />
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={6}>
            <Input />
          </td>
          <th colSpan={6}>Механикийн нэр:</th>
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
            <ol className="px-2.5">
              {[
                `1. Та автомашинаа сайтар шалгаж авах шаардлагатай бөгөөд засварын төвөөс гарснаас хойших гомдолд "Трү Даззл" ХХК хариуцлага хүлээхгүй`,
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
