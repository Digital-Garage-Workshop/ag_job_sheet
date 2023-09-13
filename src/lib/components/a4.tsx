import { classNames } from "lib/utils";

export const A4: React.FCC = ({ children }) => {
  return (
    <div
      className={classNames(
        "h-[29.7cm] w-[21cm] bg-white",
        "last:h-[calc(29.7cm-2px)]",
      )}
    >
      {children}
    </div>
  );
};
