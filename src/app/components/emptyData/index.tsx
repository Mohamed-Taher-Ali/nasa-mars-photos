import { Flex } from "antd";

export const EmptyData = ({ message }: { message?: string }) => {
  return (
    <Flex align="center" justify="center">
      <strong>Empty Data !</strong>
      {message && <div>{message}</div>}
    </Flex>
  );
};
