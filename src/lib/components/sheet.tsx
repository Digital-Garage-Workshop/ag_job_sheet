"use client";

//
import type { HTMLAttributes } from "react";
import useSWRImmutable from "swr/immutable";

//
import { Organization } from "lib/services/schemas";
import { readFileAsync } from "lib/utils";

//
import { A4 } from "./a4";

interface ISheet extends HTMLAttributes<HTMLDivElement> {
  organization: Organization;
}
export const Sheet: React.FCC<ISheet> = ({ children, id, organization }) => {
  return (
    <A4>
      <div className="flex flex-col gap-y-2.5 p-10" id={id}>
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
  const key = organization.logo ?? null;
  const { data } = useSWRImmutable(key, () => fetchLogo(organization.logo));

  return (
    <div className="flex items-center gap-x-5">
      <div className="aspect-square w-16">
        {/* TODO: default logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {typeof data === "string" && <img src={data} alt="logo" />}
      </div>
      <div className="flex flex-col text-sm">
        <div>{organization.name}</div>
        <div>{organization.address}</div>
        <div>{`Утас: ${organization.phone}, И-мэйл: ${organization.email}`}</div>
      </div>
    </div>
  );
};
const fetchLogo = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const logo = await readFileAsync(blob);

  return logo;
};
