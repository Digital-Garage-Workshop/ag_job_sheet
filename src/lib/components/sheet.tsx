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
export const Sheet: React.FCC<ISheet> = ({
  branch,
  children,
  id,
  organization,
}) => {
  return (
    <A4>
      <div className="flex flex-col gap-y-2.5 p-10 pt-0" id={id}>
        <SheetHeader organization={organization} branch={branch} />
        {children}
      </div>
    </A4>
  );
};

interface SheetHeader {
  branch: Branch;
  organization: Organization;
}
const SheetHeader: React.FC<SheetHeader> = ({ branch, organization }) => {
  return (
    <div className="mt-10 flex items-center gap-x-5">
      <div className="aspect-square w-16">
        {/* TODO: default logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={organization.logo} alt="logo" />
      </div>
      <div className="flex flex-col text-sm">
        <div>{`${organization.name}, ${branch.name}`}</div>
        <div>{branch.address}</div>
        <div>{`Утас: ${branch.phone}, И-мэйл: ${organization.email}`}</div>
      </div>
    </div>
  );
};
