import { FC, ReactNode } from "react";
import * as SC from "./Container.styled";

interface IProps {
  className?: string,
  children: ReactNode,
}

export const Container: FC<IProps> = ({className , children}) => {
  return <SC.Container className={className}>{ children}</SC.Container>
}

