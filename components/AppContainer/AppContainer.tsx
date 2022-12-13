import { FC } from "react";
import { useRouter } from "next/router";
import { IChildren } from "../../types/types";
import * as SC from "./AppContainer.styled";

export const AppContainer: FC<IChildren> = ({ children }) => {
  const {pathname} = useRouter();
  return <SC.AppContainer currentPage={pathname}>{ children}</SC.AppContainer>
}