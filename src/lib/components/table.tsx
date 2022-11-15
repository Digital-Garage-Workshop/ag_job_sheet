//
import type { TableHTMLAttributes } from "react";

//
import { classNames } from "lib/utils";

export const Table: React.FCC<TableHTMLAttributes<HTMLTableElement>> = ({
  children,
  ...props
}) => {
  return (
    <table
      className={classNames(
        "w-full",
        "[&_thead_th]:border-none",
        "[&_th]:h-[16px] [&_th]:w-1/12 [&_th]:border [&_th]:border-black [&_th]:p-0 [&_th]:px-2.5 [&_th]:text-left [&_th]:text-xs",
        "[&_td]:h-[16px] [&_td]:border [&_td]:border-black [&_td]:p-0 [&_td]:text-xs"
      )}
      {...props}
    >
      <thead>
        <tr>
          {Array.from(Array(12)).map((_, index) => (
            <th key={`table_header_${index}`} />
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
