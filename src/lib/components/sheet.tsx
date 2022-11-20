"use client";

//
import { Organization } from "lib/services/schemas";
import { useEffect, useState } from "react";

//
import { A4 } from "./a4";

interface ISheet {
  id?: string;
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
  const [logo, setLogo] = useState<string | null>(null);

  useEffect(() => {
    fetchImage(
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Johnrogershousemay2020.webp"
    ).then((blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setLogo(reader.result);
        }
      };
      reader.readAsDataURL(blob);
    });
  }, [organization.logo]);

  return (
    <div className="flex items-center gap-x-5">
      <div className="aspect-square w-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {logo && <img src={logo} alt="logo" />}
      </div>
      <div className="flex flex-col">
        <div>{organization.name}</div>
        <div>{organization.address}</div>
        <div>{`Утас: ${organization.phone}, И-мэйл: ${organization.email}`}</div>
      </div>
    </div>
  );
};
const fetchImage = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();

  return blob;
};
