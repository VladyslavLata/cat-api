import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg"; 
import * as SC from "./Header.styled";

export const Header: FC = () => {
  return (
    <SC.Header>
      <SC.LogoLink href="/">
        <Image src={logo} width={106} height={24} alt="logo" />
      </SC.LogoLink>
    </SC.Header>
  )
}