import { FC } from "react";
import { Header } from "../Heder/Header";
import { Hero } from "../Hero/Hero";
import * as SC from "./Aside.styled";
import { Container } from "../Container/Container.styled";

export const AsideBar: FC = () => {

  // const visibleMainContent = () => {
  //   const eMain = document.getElementById("main")!;

  //   if (eMain.classList.contains("visibility-hidden")) {
  //     eMain.classList.remove("visibility-hidden");
  //   }
  // }

  // visibleMainContent()

  
  return (
    <SC.AppBar>
        <Header />
        <Hero />
    </SC.AppBar>
  );
};
