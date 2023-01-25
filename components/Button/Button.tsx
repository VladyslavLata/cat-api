import { FC, ReactNode } from "react";
import * as SC from "./Button.styled";

interface IProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  btn: "main" | "seccond";
  className?: string;
  type?: "button" | "submit";
  form?: string;
}

export const Button: FC<IProps> = ({
  onClick,
  className,
  children,
  btn,
  form,
  type = "button",
  disabled = false,
}) => {
  return (
    <SC.Btn
      className={className}
      type={type}
      btn={btn}
      form={form}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </SC.Btn>
  );
};
