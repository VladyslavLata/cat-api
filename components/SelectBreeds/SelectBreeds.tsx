import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import { IBreeds } from "../../types/types";

interface IProps {
  optionValueDefault?: string,
  optionDefault?: string,
  label?:string,
  breeds: IBreeds[],
  name: string,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  queryParam: ParsedUrlQuery,
}

export const SelectBreeds: FC<IProps> = ({optionValueDefault, optionDefault, label, breeds, name, onChange, queryParam }) => {
  return (<>
    {label && <label htmlFor={name}>{label}</label>} 
    <select id={name} name={name} onChange={onChange} defaultValue={queryParam[name]} >
      {optionValueDefault && optionDefault && <option key={optionValueDefault} value={optionValueDefault}>{optionDefault}</option>}
      {breeds.map(breed => <option key={breed.id}  value={breed.id}>{breed.name}</option>
      )}  
    </select>
  </>
  )
}