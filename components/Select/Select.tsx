import { FC } from "react";

interface IProps {
  optionDefault: string,
}

export const Select: FC<IProps> = ({ optionDefault}) => {
  return (
    <select>
      <option value={optionDefault}></option>
    </select>
  )
}