import { FC, ReactNode } from "react";
import Head from "next/head";
import { FavoriteCatNavigation } from "../FavoriteCatNavigation/FavoriteCatNavigation";
import { Container } from "../Container/Container";
import { useShowMobileMenu } from "../../hooks/useShowMobileMenu";
import { BackPagePanel } from "../BackPagePanel/BackPagePanel";
import * as SC from "./SharedLayoutLikedPage.styled";

interface IProps {
  pageName: string,
  pageTitle: string,
  pageDescription: string,
  children: ReactNode,
}

export const SharedLayoutLikedPage: FC<IProps> = ({ pageName, pageTitle, pageDescription,  children }) => {
  const {showMobileMenu, toggleMobileMenu } = useShowMobileMenu();

  return (
    <>
       <Head>
      <title>{pageTitle}</title>
        <meta
        name="description"
        content={pageDescription}
        />
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <FavoriteCatNavigation onShowMobileMenu={toggleMobileMenu}/>
      <SC.ContainerWrapp>
        <Container>
          <BackPagePanel page={pageName} />
         {children}
        </Container>
      </SC.ContainerWrapp>
    </>
  )
}