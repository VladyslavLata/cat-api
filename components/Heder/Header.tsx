import { FC } from "react";
import { useStore } from "../../Store/Store";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import Logo from "../../public/logo.svg"; 
import * as SC from "./Header.styled";

export const Header: FC = () => {
  const {showModal, lightTheme} = useStore();
  return (
    <SC.Header>
      <SC.LogoLink href="/" showlink={(!showModal).toString()} lighttheme={lightTheme.toString()}>
        <Logo width={106} height={24} visibility="visible" fill="currentColor" />
      </SC.LogoLink>
      <ToggleSwitch/>
    </SC.Header>
  )
}