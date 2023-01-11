// import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import { IBreeds } from "../../types/types";
import { useStore } from "../../Store/Store";
import * as SC from "../Select/Select.styled";


interface IProps {
  optionValueDefault?: string,
  optionDefault?: string,
  label?:string,
  breeds: IBreeds[],
  name: string,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  // queryParam: ParsedUrlQuery,
  primary?: boolean,
}

export const SelectBreeds: FC<IProps> = ({ optionValueDefault, optionDefault, primary, label, breeds, name, onChange}) => {
  
  const store = useStore((state) => state.selectsValue);
  // const defaultValue = queryParam[name]? queryParam[name]: optionValueDefault
  return (<>
    {label && <label htmlFor={name}>{label}</label>} 
    <SC.Select id={name} primary={primary} name={name} onChange={onChange} value={store.breed_ids} >
      {optionValueDefault && optionDefault && <option key={optionValueDefault} value={optionValueDefault}>{optionDefault}</option>}
      {breeds.map(breed => <option key={breed.id}  value={breed.id}>{breed.name}</option>
      )}  
    </SC.Select>
  </>
  )
}