import { FC } from "react";
import { Container } from "../Container/Container";
import { Navigation } from "../Navigation/Navigation";
import { dataNavLinks } from "../../constants/dataNavLinks";
import Close from "../../public/close.svg"; 
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import * as SC from "./MobileMenu.styled";

interface IProps {
  displayingMobileMenu: boolean;
  onCloseMobileMenu: () => void;
}

export const MobileMenu: FC<IProps> = ({ displayingMobileMenu, onCloseMobileMenu }) => {
  return (
    <SC.MobileMenu displaying={displayingMobileMenu}>
      {/* <SC.BtnWrapp> */}
        <SC.CloseBtn svg={Close} width={25} height={25} primary  onClick={onCloseMobileMenu} />
      {/* </SC.BtnWrapp> */}
      <Container>
        <Navigation navLinks={dataNavLinks} linkVisibility={!displayingMobileMenu} />
      </Container>
    </SC.MobileMenu>
  );
};
