import { FC } from "react";
import Link from "next/link";
import { INavLink } from "../../types/types";
import * as SC from "./NavLink.styled";

// export interface IProps {
//   bgColor: string;
//   bgBorderColor: string;
//   img: string;
//   text: string;
//   path: string;
// }

export const NavLink: FC<INavLink> = ({
  path,
  bgColor,
  img,
  text,
}) => {
  return (
    <Link href={path}>
      <SC.WrapperText bgColor={bgColor} img={img} >
        <p>{text}</p>
      </SC.WrapperText>
    </Link>
  );
};
