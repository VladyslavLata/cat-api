import { FC, ReactNode } from "react";
import { Bundle } from "typescript";

interface IProps {
  children: ReactNode,
  callback: () => void,
  disabled?: boolean,
}

export const Button: FC<IProps> = ({ callback, children, disabled = false }) => {
  return (
    <button type="button" disabled={disabled} onClick={callback}>{children}</button>
  )
}