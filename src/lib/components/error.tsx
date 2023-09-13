import { Loader2Icon } from "lucide-react";

type Props = {
  message: string;
};
export const ErrorComponent: React.FC<Props> = ({ message }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <p className="text-red-500">{message}</p>
    </div>
  );
};
