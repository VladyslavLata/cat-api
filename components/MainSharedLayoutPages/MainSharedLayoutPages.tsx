import { FC,ReactNode } from "react";
import Head from "next/head";
import { Container } from "../Container/Container.styled";
import { FavoriteCatNavigation } from "../FavoriteCatNavigation/FavoriteCatNavigation";
import { useShowMobileMenu } from "../../hooks/useShowMobileMenu";

interface Iprops {
  pageTitle: string, 
  pageDescription: string,
  children: ReactNode,
}

export const MainSharedLayoutPages: FC<Iprops> = ({ pageTitle, pageDescription ,children}) => {
 const {showMobileMenu, toggleMobileMenu} = useShowMobileMenu()
  
  return (<>
       <Head>
      {/* <title>Voting</title> */}
      <title>{pageTitle}</title>
        <meta
          name="description"
          // content="Vote for your favorite cat breed"
        content={pageDescription}
        />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <FavoriteCatNavigation onShowMobileMenu={toggleMobileMenu}/>
    <Container>
    {children}
    </Container>
  </>
  )
}