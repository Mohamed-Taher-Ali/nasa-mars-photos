import { Layout, theme } from "antd";

export const Header = () => {
  const {
    token: { colorWhite, fontSizeHeading2, fontWeightStrong },
  } = theme.useToken();

  return (
    <Layout.Header className="custom-header">
      <div
        style={{
          color: colorWhite,
          fontSize: fontSizeHeading2,
          fontWeight: fontWeightStrong,
        }}
      >
        NASA - Mars Photos
      </div>
    </Layout.Header>
  );
};
