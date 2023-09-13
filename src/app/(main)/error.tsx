"use client";

import { useEffect } from "react";

import { ErrorComponent } from "lib/components";

const ErrorPage: React.FC<{ error: Error; reset: () => void }> = ({
  error,
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorComponent message={error.message} />;
};
export default ErrorPage;
