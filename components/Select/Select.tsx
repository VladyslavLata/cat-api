import { FC } from "react";
import { IBreeds } from "../../types/types";

interface IProps {
  optionValueDefault?: string,
  optionDefault?: string,
  breeds: IBreeds[],
  name: string,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>)=>void,
}

export const Select: FC<IProps> = ({optionValueDefault, optionDefault, breeds, name, onChange }) => {
  return (
    <select name={name} onChange={onChange}>
      {optionValueDefault && optionDefault && <option key={optionValueDefault} value={optionValueDefault}>{optionDefault}</option>}
      {breeds.map(breed => <option key={breed.id} value={breed.id}>{ breed.name}</option>)}
    </select>
  )
}