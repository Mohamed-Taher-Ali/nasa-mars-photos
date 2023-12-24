import { Layout as AntLayout } from "antd";
import { Content } from "./Content";
import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

import "./Layout.css";

type LayoutType = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutType) => (
  <AntLayout>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </AntLayout>
);
