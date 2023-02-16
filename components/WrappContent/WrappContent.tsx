import { FC, ReactNode } from "react";
import * as SC from "./WrappContent.styled";

interface IProps {
  showContent: boolean,
  children:ReactNode,
}

export const WrappContent: FC<IProps> = ({ showContent ,children}) => {
  return (
    <SC.ContentBox showContent={showContent}>
      {children}
    </SC.ContentBox>
  )
}