import { FC } from "react";
import { useStore } from "../../Store/Store"; 
import { Container } from "../Container/Container";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
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
  const { lightTheme} = useStore();
  return (
    <SC.MobileMenu displaying={displayingMobileMenu} lightTheme={lightTheme}>
      <SC.SwitchTheme/>
      <SC.CloseBtn
        svg={Close}
        width={25}
        height={25}
        primary
        disabled={!displayingMobileMenu}
        onClick={onCloseMobileMenu}
        lightTheme={lightTheme}
      />
      <SC.MobileMenuContainer lightTheme={lightTheme}>
        <SC.MobileMenuNavigation
          navLinks={dataNavLinks}
          linkVisible={displayingMobileMenu}
        />
      </SC.MobileMenuContainer>
    </SC.MobileMenu>
  );
};
