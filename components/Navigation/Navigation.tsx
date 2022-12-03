import { FC } from "react";
// import vote from "../../public/vote.webp";
// import gallery from "../../public/gallery.webp";
// import breeds from "../../public/breeds.webp";
import { INavLink } from "../../types/types";
import { NavLink } from "../NavLink/NavLink";
import * as SC from "./Navigation.styled";


interface IProps {
navLinks: INavLink[],
}

export const Navigation: FC<IProps> = ({ navLinks }) => {
  return (
    <SC.List>
      {navLinks.map(({ path, bgColor, img, text }) => (
        <li key={path}><NavLink path={path} bgColor={bgColor} img={img} text={text}/></li>))}
    </SC.List>
  )
}