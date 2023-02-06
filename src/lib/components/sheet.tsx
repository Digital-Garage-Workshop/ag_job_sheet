//
import type { HTMLAttributes } from "react";

//
import { Branch, Organization } from "lib/services/schemas";

//
import { A4 } from "./a4";

interface ISheet extends HTMLAttributes<HTMLDivElement> {
  branch: Branch;
  organization: Organization;
}
export const Sheet: React.FCC<ISheet> = ({ children, id, organization }) => {
  return (
    <A4>
      <div className="flex flex-col gap-y-2.5 p-10 pt-0" id={id}>
        <SheetHeader organization={organization} />
        {children}
      </div>
    </A4>
  );
};

interface SheetHeader {
  organization: Organization;
}
const SheetHeader: React.FC<SheetHeader> = ({ organization }) => {
  return (
    <div className="mt-10 flex items-center gap-x-5">
      <div className="aspect-square w-16">
        {/* TODO: default logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={organization.logo} alt="logo" />
      </div>
      <div className="flex flex-col text-sm">
        <div>{organization.name}</div>
        <div>{organization.address}</div>
        <div>{`Утас: ${organization.phone}, И-мэйл: ${organization.email}`}</div>
      </div>
    </div>
  );
};
