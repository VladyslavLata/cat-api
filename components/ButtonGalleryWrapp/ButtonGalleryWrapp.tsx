import { FC } from "react";
import { IChildren } from "../../types/types";
import * as SC from "./ButtonGalleryWrapp.styled";

export const ButtonGalleryWrapp: FC<IChildren> = ({children}) => {
  return (
    <SC.Wrapp>{ children}</SC.Wrapp>
  )
}