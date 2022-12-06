import "../styles/globals.css";
import * as SC from "../styles/App.styled";
import type { AppProps } from "next/app";
import { Jost } from "@next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";
import { Container } from "../components/Container/Container";
import { AsideBar } from "../components/AsideBar/AsideBar";

const jost = Jost({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${jost.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <Container>
          <AsideBar />
          <SC.MainContent>
            <Component {...pageProps} />
          </SC.MainContent>
        </Container>
      </ThemeProvider>
    </>
  );
}
