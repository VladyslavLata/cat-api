import { FC } from "react";
import Link from "next/link";
import { Text } from "../../components/Text/Text";
import { Box } from "../Box/Box";
// import vote from "../../public/vote.webp";
// import gallery from "../../public/gallery.webp";
// import breeds from "../../public/breeds.webp";
import { INavLink } from "../../types/types";
import { NavLink } from "../NavLink/NavLink";
import * as SC from "./Navigation.styled";

interface IProps {
  navLinks: INavLink[];
}

export const Navigation: FC<IProps> = ({ navLinks }) => {
  return (
    <SC.List>
      {navLinks.map(({ path, bgColor, img, text }) => (
        <SC.Item key={path}>
          <Link href={path}>
            <SC.Wrapp bgColor={bgColor} img={img}>
              <SC.LinkTitle
                fs={"s"}
                fw={"medium"}
                lh={"heading"}
                color={"testAccentPrimary"}
              >
                {text}
              </SC.LinkTitle>
            </SC.Wrapp>
          </Link>
        </SC.Item>
      ))}
    </SC.List>
  );
};
