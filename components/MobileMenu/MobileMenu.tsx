import { FC } from "react";
import { Container } from "../Container/Container";
import { Navigation } from "../Navigation/Navigation";
import { dataNavLinks } from "../../constants/dataNavLinks";
import Close from "../../public/close.svg";
import * as SC from "./MobileMenu.styled";

interface IProps {
  displayingMobileMenu: boolean;
  onCloseMobileMenu: () => void;
}

export const MobileMenu: FC<IProps> = ({
  displayingMobileMenu,
  onCloseMobileMenu,
}) => {
  return (
    <SC.MobileMenu displaying={displayingMobileMenu}>
      <SC.CloseBtn
        svg={Close}
        width={25}
        height={25}
        primary
        disabled={!displayingMobileMenu}
        onClick={onCloseMobileMenu}
      />
      <Container>
        <Navigation
          navLinks={dataNavLinks}
          linkVisible={displayingMobileMenu}
        />
      </Container>
    </SC.MobileMenu>
  );
};
