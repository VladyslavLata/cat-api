import { FC } from "react";
import { IChildren } from "../../types/types";
import * as SC from "./Container.styled";

export const Container: FC<IChildren> = ({children}) => {
  return <SC.Container>{ children}</SC.Container>
}

