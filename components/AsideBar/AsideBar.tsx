import { FC } from "react";
import { Header } from "../Heder/Header";
import { Hero } from "../Hero/Hero";

export const AsideBar: FC = () => {
  return (
    <aside>
      <Header />
      <Hero />
    </aside>
  );
};
