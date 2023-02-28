import "../styles/globals.css";
import * as SC from "../styles/App.styled";
import { useState,useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { GlobalStyle } from "../styles/Global.styled";
import { useStore } from "../Store/Store";
import { Jost } from "@next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";

import { AppContainer } from "../components/AppContainer/AppContainer";
import { AsideBar } from "../components/AsideBar/AsideBar";
// import { MobileMenu } from "../components/MobileMenu/MobileMenu";
import { MediaContextProvider, Media } from "../media";

const jost = Jost({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
});


export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const {lightTheme } = useStore();
  const { pathname } = useRouter();

useEffect(() => {
  setIsMounted(true)
}, [])

  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${jost.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <GlobalStyle lightTheme={lightTheme } />
        <MediaContextProvider disableDynamicMediaQueries>
          {/* <MobileMenu displayingMobileMenu={ true} /> */}
          {isMounted &&
          <AppContainer>
            <Media greaterThanOrEqual="l"><AsideBar /></Media>
            <SC.MainContent id="main" currentPage={pathname}>
              <Component {...pageProps} />
            </SC.MainContent>
          </AppContainer>}
        </MediaContextProvider>
      </ThemeProvider>
    </>
  );
}
