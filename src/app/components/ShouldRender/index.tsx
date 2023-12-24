import { ReactNode } from "react";

type ShouldRenderType = {
  children: JSX.Element;
  else?: JSX.Element;
  if: any;
};

export const ShouldRender = ({ children, ...params }: ShouldRenderType) => {
  return [null, undefined, false].includes(!!params.if)
    ? params.else || null
    : children;
};
