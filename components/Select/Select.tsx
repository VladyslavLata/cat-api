import { FC } from "react";
import { ParsedUrlQuery } from "querystring";
import { ISelect } from "../../types/types";

interface IProps {
  label?: string;
  selectDatas: ISelect[];
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  queryParam: ParsedUrlQuery;
}

export const Select: FC<IProps> = ({
  selectDatas,
  label,
  name,
  onChange,
  queryParam,
}) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        name={name}
        onChange={onChange}
        defaultValue={queryParam[name]}
      >
        {selectDatas.map((selectData) => (
          <option key={selectData.value} value={selectData.value}>
            {selectData.option}
          </option>
        ))}
      </select>
    </>
  );
};
