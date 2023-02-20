import { FC } from "react";
import { useStore } from "../../Store/Store";
import Logo from "../../public/logo.svg"; 
import * as SC from "./Header.styled";

export const Header: FC = () => {
  const {showModal} = useStore();
  return (
    <SC.Header>
      <SC.LogoLink href="/" showLink={!showModal}>
        <Logo width={106} height={24} visibility="visible" />
      </SC.LogoLink>
    </SC.Header>
  )
}