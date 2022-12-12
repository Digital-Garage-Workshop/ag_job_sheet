"use client";

import { useEffect } from "react";

const ErrorPage: React.FC<{ error: Error; reset: () => void }> = ({
  error,
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <p>{error.message}</p>
    </div>
  );
};
export default ErrorPage;
