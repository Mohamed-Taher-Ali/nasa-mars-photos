type GetQueryParamsParams = string[];

export function getQueryParams(...paramsNames: GetQueryParamsParams) {
  const queryParameters = new URLSearchParams(window.location.search);

  return paramsNames.reduce(
    (params, paramName) => ({
      [paramName]: eval(queryParameters.get(paramName) as string),
      ...params,
    }),
    {}
  );
}
