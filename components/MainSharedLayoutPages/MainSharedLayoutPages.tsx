import { FC, ReactNode } from "react";
import Head from "next/head";
import { Container } from "../Container/Container.styled";
import { FavoriteCatNavigation } from "../FavoriteCatNavigation/FavoriteCatNavigation";
import { useShowMobileMenu } from "../../hooks/useShowMobileMenu";
import { MobileMenu } from "../MobileMenu/MobileMenu";

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
  const { showMobileMenu, visibleMobileMenu, hiddenMobileMenu } = useShowMobileMenu();

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
      <FavoriteCatNavigation onShowMobileMenu={visibleMobileMenu} />
      <Container>{children}</Container>
      <MobileMenu displayingMobileMenu={showMobileMenu} onCloseMobileMenu={hiddenMobileMenu} />
    </>
  );
};
