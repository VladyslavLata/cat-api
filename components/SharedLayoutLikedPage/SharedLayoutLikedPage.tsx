import { FC, ReactNode } from "react";
import { FavoriteCatNavigation } from "../FavoriteCatNavigation/FavoriteCatNavigation";
import { Container } from "../Container/Container";
import { BackPagePanel } from "../BackPagePanel/BackPagePanel";
import * as SC from "./SharedLayoutLikedPage.styled";

interface IProps {
  pageName: string,
  children: ReactNode,
}

export const SharedLayoutLikedPage:FC<IProps> = ({ pageName, children}) => {
  return (
        <>
      <FavoriteCatNavigation />
      <SC.ContainerWrapp>
        <Container>
          <BackPagePanel page={pageName} />
         {children}
        </Container>
      </SC.ContainerWrapp>
    </>
  )
}