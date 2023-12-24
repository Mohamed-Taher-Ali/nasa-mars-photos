import { Alert, Badge, Card, Col, Flex, Row, Space, Spin, theme } from "antd";
import { ShouldRender } from "app/components";
import { PhotoDTO } from "../../types";
import { useState } from "react";
import "./MarsCard.css";

type MarsCardParams<T = PhotoDTO> = {
  onClick: (id: number) => void;
  data: T;
};

export const MarsCard = ({
  onClick,
  data: { id, camera, earthDate, imgSrc, rover, sol },
}: MarsCardParams) => {
  const [isImageLoading, setImageLoading] = useState(true);
  const onImageClick = () => onClick(id);

  const {
    token: { colorFill },
  } = theme.useToken();

  return (
    <Card
      style={{ width: "100%" }}
      bodyStyle={{ padding: "10px" }}
      headStyle={{ backgroundColor: colorFill }}
      extra={<Badge text={rover.status} color="green" />}
      title={`${rover.name} [${rover.totalPhotos} photo${
        rover.totalPhotos > 1 ? "s" : ""
      }]`}
    >
      <Flex align="stretch" gap={8}>
        <Space
          direction="vertical"
          align="center"
          size={0}
          style={{
            display: "flex !important",
            justifyContent: "space-between",
          }}
        >
          <ShouldRender if={isImageLoading}>
            <Spin className="image-load" />
          </ShouldRender>
          <div
            style={{
              flexGrow: "1",
              display: isImageLoading ? "none" : "block",
            }}
          >
            <img
              height={"100%"}
              src={imgSrc}
              className="card-photo"
              onClick={onImageClick}
              onLoad={() => setImageLoading(false)}
            />
          </div>
          <div>{earthDate}</div>
        </Space>

        <Space direction="vertical" size={8} style={{ width: "100%" }}>
          <Alert
            description={
              <Row gutter={8}>
                <Col span={8}>
                  <strong>ID : </strong>
                  {id}
                </Col>
                <Col span={16}>
                  <strong>SOL : </strong>
                  {sol}
                </Col>
              </Row>
            }
            type="success"
          />
          <Alert
            description={
              <Row gutter={8}>
                <Col span={8}>
                  <strong>Camera Name : </strong>
                  {camera.name}
                </Col>
                <Col span={16}>
                  <strong>Camera Full Name : </strong>
                  {camera.fullName}
                </Col>
              </Row>
            }
            type="success"
          />
        </Space>
      </Flex>
    </Card>
  );
};

export const MarsCards = ({ data, onClick }: MarsCardParams<PhotoDTO[]>) => {
  return (
    <Space direction="vertical" size={16} style={{ width: "100%" }}>
      {data.map((photo) => (
        <MarsCard key={photo.id} data={photo} onClick={onClick} />
      ))}
    </Space>
  );
};
