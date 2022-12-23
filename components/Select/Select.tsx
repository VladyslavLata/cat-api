import { FC } from "react";
import { ParsedUrlQuery } from "querystring";
import { ISelect } from "../../types/types";
import * as SC from "./Select.styled";

interface IProps {
  label?: string;
  selectDatas: ISelect[];
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  queryParam: ParsedUrlQuery;
  primary?: boolean,
}

export const Select: FC<IProps> = ({
  selectDatas,
  label,
  name,
  onChange,
  queryParam,
  primary,
}) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <SC.Select
        id={name}
        name={name}
        primary={primary}
        onChange={onChange}
        defaultValue={queryParam[name]}
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
