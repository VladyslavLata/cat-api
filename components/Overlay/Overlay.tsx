import { FC } from "react";
import { IChildren } from "../../types/types";
import * as SC from "./Overlay.styled";

export const Overlay: FC<IChildren> = ({ children }) => {
  return (
    <SC.Overlay>{children}</SC.Overlay>
  )
}