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
    <label className="flex h-full items-center whitespace-nowrap">
      {label && label}
      <input
        className={classNames("w-full px-2", "focus:outline-none", className)}
        {...props}
      />
    </label>
  );
};
