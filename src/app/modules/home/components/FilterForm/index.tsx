import { Button, InputNumber, Space } from "antd";
import { useFilterForm } from "./useFilterForm";
import { PhotoFilterType } from "../../types";
import "./FilterForm.css";

export type FilterFormParams = Omit<PhotoFilterType, "id"> & {
  onUpdate: (data: Omit<PhotoFilterType, "id">) => void;
};

export const FilterForm = ({ page, sol, onUpdate }: FilterFormParams) => {
  const { fields, onChange, onSend } = useFilterForm({ page, sol, onUpdate });

  return (
    <div className="filter-form">
      <Space size={16}>
        <div>
          <strong style={{ paddingInlineEnd: "10px" }}>Page</strong>{" "}
          <InputNumber
            min={0}
            max={1000000}
            value={fields.page}
            onChange={onChange("page")}
          />
        </div>
        <div>
          <strong style={{ paddingInlineEnd: "10px" }}>SOL</strong>{" "}
          <InputNumber
            min={0}
            max={1000000}
            value={fields.sol}
            onChange={onChange("sol")}
          />
        </div>
        <Button
          type="primary"
          onClick={onSend}
          disabled={page == fields.page && sol == fields.sol}
        >
          Send
        </Button>
      </Space>
    </div>
  );
};
