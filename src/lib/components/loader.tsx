import { Loader2Icon } from "lucide-react";

export const Loader: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader2Icon className="h-10 w-10 animate-spin" />
    </div>
  );
};
