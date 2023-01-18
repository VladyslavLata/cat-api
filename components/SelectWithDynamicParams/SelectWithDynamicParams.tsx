// import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import { IBreeds, ICateory } from "../../types/types";
import { useStore } from "../../Store/Store";
import * as SC from "../Select/Select.styled";


interface IProps {
  optionValueDefault?: string,
  optionDefault?: string,
  label?:string,
  datas: IBreeds[] | ICateory[],
  name: "category_ids" | "breed_ids"
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  // queryParam: ParsedUrlQuery,
  primary?: boolean,
}

export const SelectWithDynamicParams: FC<IProps> = ({ optionValueDefault, optionDefault, primary, label, datas, name, onChange}) => {
  
  const store = useStore((state) => state.selectsValue);
  // const defaultValue = queryParam[name]? queryParam[name]: optionValueDefault
  return (<>
    {label && <SC.Label htmlFor={name}>{label}</SC.Label>} 
    <SC.Select id={name} primary={primary} name={name} onChange={onChange} value={store[`${name}`]} >
      {optionValueDefault && optionDefault && <option key={optionValueDefault} value={optionValueDefault}>{optionDefault}</option>}
      {datas.map(data => <option key={data.id}  value={data.id}>{data.name}</option>
      )}  
    </SC.Select>
  </>
  )
}