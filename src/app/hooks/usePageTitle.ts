import { useLayoutEffect } from "react";

export const usePageTitle = (title: string, prefix?: string) => {
  const pref = prefix || "NASA - ";

  useLayoutEffect(() => {
    document.title = `${pref}${title}`;
  }, [pref, title]);
};
