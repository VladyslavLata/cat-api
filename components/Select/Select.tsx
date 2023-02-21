import { FC } from "react";
import { ISelect } from "../../types/types";
import * as SC from "./Select.styled";
import { useStore } from "../../Store/Store";

interface IProps {
  label?: string;
  selectDatas: ISelect[];
  name: "limit" | "breed_ids" | "order" | "mime_types";
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  primary?: boolean;
}

export const Select: FC<IProps> = ({
  selectDatas,
  label,
  name,
  onChange,
  primary,
}) => {
  const state = useStore((state) => state.selectsValue);

  return (
    <>
      {label && <SC.Label htmlFor={name}>{label}</SC.Label>}
      <SC.Select
        id={name}
        name={name}
        primary={primary}
        onChange={onChange}
        value={state[`${name}`]}
      >
        {selectDatas.map((selectData) => (
          <option key={selectData.value} value={selectData.value}>
            {selectData.option}
          </option>
        ))}
      </SC.Select>
    </>
  );
};
