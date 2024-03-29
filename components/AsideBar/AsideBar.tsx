import { FC } from "react";
import { Header } from "../Heder/Header";
import { Hero } from "../Hero/Hero";
import * as SC from "./Aside.styled";

export const AsideBar: FC = () => {
  return (
    <SC.AppBar>
        <Header />
        <Hero />
    </SC.AppBar>
  );
};
