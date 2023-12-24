import { Layout, theme } from "antd";
import { ReactNode } from "react";

type ContentParams = {
  children: ReactNode;
};

export const Content = ({ children }: ContentParams) => {
  const {
    token: { borderRadiusLG, colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Content className="custom-content">
      <div
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          padding: "100px 25px 25px 25px",
        }}
      >
        {children}
      </div>
    </Layout.Content>
  );
};
