import { useEffect, useState } from "react";
import { FilterFormParams } from ".";

export const useFilterForm = ({ onUpdate, page, sol }: FilterFormParams) => {
  const [fields, setFields] = useState({ page, sol });
  const onSend = () => onUpdate(fields);

  useEffect(() => {
    if (page != fields.page || sol != fields.sol) {
      setFields({ page, sol });
    }
  }, [page, sol]);

  const onChange =
    (name: string) =>
    (val: number | null = 0) => {
      setFields({
        ...fields,
        [name]: val,
      });
    };

  return {
    onSend,
    onChange,
    fields,
  };
};
