import { FC } from "react";
import * as SC from "./Overlay.styled";

interface IProps {
  className?: string,
  children: React.ReactNode;
}

export const Overlay: FC<IProps> = ({ className, children }) => {
  return (
    <SC.Overlay className={className}>{children}</SC.Overlay>
  )
}