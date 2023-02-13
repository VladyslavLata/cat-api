import { FC } from "react";
import { Container } from "../Container/Container";
import { Navigation } from "../Navigation/Navigation";
import { dataNavLinks } from "../../constants/dataNavLinks";
import * as SC from "./MobileMenu.styled";

interface IProps {
  displayingMobileMenu: boolean;
}

export const MobileMenu: FC<IProps> = ({ displayingMobileMenu }) => {
  return (
    <SC.MobileMenu displaing={displayingMobileMenu}>
      <Container>
        <Navigation navLinks={dataNavLinks} />
      </Container>
    </SC.MobileMenu>
  );
};
