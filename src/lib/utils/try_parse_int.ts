export const tryParseInt = (value?: string | string[]) => {
  if (value === undefined) {
    return undefined;
  }
  if (typeof value === "string") {
    const parsed = parseInt(value);
    return typeof parsed === "number" ? parsed : undefined;
  } else if (Array.isArray(value)) {
    return undefined;
  }
};
