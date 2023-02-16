import { FC, ReactNode } from "react";
import Head from "next/head";
import { Media } from "../../media";
import { Container } from "../Container/Container.styled";
import { FavoriteCatNavigation } from "../FavoriteCatNavigation/FavoriteCatNavigation";
import { useShowMobileMenu } from "../../hooks/useShowMobileMenu";
import { WrappContent } from "../WrappContent/WrappContent";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import * as SC from "./MainSharedLayoutPages.styled";

interface Iprops {
  pageTitle: string;
  pageDescription: string;
  children: ReactNode;
}

export const MainSharedLayoutPages: FC<Iprops> = ({
  pageTitle,
  pageDescription,
  children,
}) => {
  const { showMobileMenu, showContent, onVisibleMobileMenu, onHiddenMobileMenu } =
    useShowMobileMenu();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WrappContent showContent={showContent}>
      <FavoriteCatNavigation onShowMobileMenu={onVisibleMobileMenu} />
        <Container>{children}</Container>
      </WrappContent>
      <Media lessThan="l">
        <MobileMenu
          displayingMobileMenu={showMobileMenu}
          onCloseMobileMenu={onHiddenMobileMenu}
        />
      </Media>
    </>
  );
};
