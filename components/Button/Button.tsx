import { FC, ReactNode } from "react";
import { Bundle } from "typescript";

interface IProps {
  children: ReactNode,
  onClick: () => void,
  disabled?: boolean,
}

export const Button: FC<IProps> = ({ onClick, children, disabled = false }) => {
  return (
    <button type="button" disabled={disabled} onClick={onClick}>{children}</button>
  )
}