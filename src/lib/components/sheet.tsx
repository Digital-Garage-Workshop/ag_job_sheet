import { A4 } from "./a4";

interface ISheet {
  id?: string;
}
export const Sheet: React.FCC<ISheet> = ({ children, id }) => {
  return (
    <A4>
      <div className="flex flex-col gap-y-2.5 p-10" id={id}>
        <SheetHeader />
        {children}
      </div>
    </A4>
  );
};

const SheetHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-x-5">
      <div className="text-3xl">GARAGE</div>
      <div className="flex flex-col">
        <div>Трү Даззл ХХК</div>
        <div>Сүхбаатар дүүрэг, 9-р хороо, Саяар төв</div>
        <div>Утас: (+976) 7200-1122, И-мэйл: iare_iare@yahoo.com</div>
      </div>
    </div>
  );
};
