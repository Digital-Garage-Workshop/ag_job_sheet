//
import type { InputHTMLAttributes } from "react";

//
import { classNames } from "lib/utils";

interface IInput {
  label?: string;
}
export const Input: React.FC<
  IInput & InputHTMLAttributes<HTMLInputElement>
> = ({ className, label, ...props }) => {
  return (
    <label className="my-[1px] flex hidden h-full items-center whitespace-nowrap">
      {label && label}
      <input
        className={classNames("w-full px-2", "focus:outline-none", className)}
        {...props}
      />
    </label>
  );
};
