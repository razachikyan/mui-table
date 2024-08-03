import { NavigateFunction } from "react-router-dom";

export const getQueryParams = (search: string) => {
  const params = new URLSearchParams(search);
  return Object.fromEntries(params.entries());
};
