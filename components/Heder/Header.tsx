import { FC } from "react";
// import Link from "next/link";
// import Image from "next/image";
import Logo from "../../public/logo.svg"; 
import * as SC from "./Header.styled";

export const Header: FC = () => {
  return (
    <SC.Header>
      <SC.LogoLink href="/">
        <Logo width={106} height={24} />
      </SC.LogoLink>
    </SC.Header>
  )
}