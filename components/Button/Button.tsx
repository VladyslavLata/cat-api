import { FC, ReactNode } from "react";
import * as SC from "./Button.styled";

interface IProps {
  children: ReactNode,
  onClick: () => void,
  disabled?: boolean,
  btn: "main" | "seccond", 
}

export const Button: FC<IProps> = ({ onClick, children, btn, disabled = false }) => {
  return (
    <SC.Btn type="button" btn={btn} disabled={disabled} onClick={onClick}>{children}</SC.Btn>
  )
}