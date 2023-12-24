export const generateQueryString = (obj: Record<string, any>) => {
  return new URLSearchParams(obj);
};

export const serializeQueryString = (location: Location) => {
  const search = location.search.substring(1);

  return JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
};
