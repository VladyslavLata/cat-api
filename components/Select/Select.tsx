import { FC } from "react";
import { ParsedUrlQuery } from "querystring";
import { ISelect } from "../../types/types";
import * as SC from "./Select.styled";
// import { UseStore } from "../../Store/Store";

interface IProps {
  label?: string;
  selectDatas: ISelect[];
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  queryParam: ParsedUrlQuery;
    // queryParam: string;
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

// const state = UseStore((state)=>state.selectsValue)

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <SC.Select
        id={name}
        name={name}
        primary={primary}
        onChange={onChange}
        // defaultValue={queryParam[name]}
        value={queryParam[name]}
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
