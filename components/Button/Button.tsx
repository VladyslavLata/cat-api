import { FC, ReactNode } from "react";
import * as SC from "./Button.styled";

interface IProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  btn: "main" | "seccond";
  className?: string;
}

export const Button: FC<IProps> = ({
  onClick,
  className,
  children,
  btn,
  disabled = false,
}) => {
  return (
    <SC.Btn
      className={className}
      type="button"
      btn={btn}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </SC.Btn>
  );
};
