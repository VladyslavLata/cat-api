import { FC } from "react";
// import { ParsedUrlQuery } from "querystring";
import { ISelect } from "../../types/types";
import * as SC from "./Select.styled";
// import { UseStore } from "../../Store/Store";
import { useStore } from "../../Store/Store";

interface IProps {
  label?: string;
  selectDatas: ISelect[];
  name: "limit" | "breed_ids" | "order" | "mime_types";
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  // queryParam: ParsedUrlQuery;
  // value: string;
  primary?: boolean;
}

export const Select: FC<IProps> = ({
  selectDatas,
  label,
  name,
  onChange,
  // queryParam,
  primary,
  // value,
}) => {
  const state = useStore((state) => state.selectsValue);

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <SC.Select
        id={name}
        name={name}
        primary={primary}
        onChange={onChange}
        // defaultValue={queryParam[name]}
        value={state[`${name}`]}
        // value={state.limit}
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
