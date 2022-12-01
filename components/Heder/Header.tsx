import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg"; 

export const Header: FC = () => {
  return (
    <header>
      <Link href="/">
        <Image src={logo} width={106} height={24} alt="logo" />
      </Link>
    </header>
  )
}