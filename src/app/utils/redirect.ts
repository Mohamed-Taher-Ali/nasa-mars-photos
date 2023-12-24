export const redirect = (pathName: string, query: Record<string, any>) => {
  const queryString = Object.entries(query).reduce(
    (query, [pName, pVal], ind) => {
      return `${pName}=${pVal}${ind ? "&" : ""}${query}`;
    },
    ""
  );

  window.history.pushState(undefined, "", `${pathName}${queryString}`);
};
