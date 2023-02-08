import { FC } from "react";
import Link from "next/link";
import { INavPath } from "../../types/types";
import * as SC from "./FavoriteLink.styled";

interface IProps {
  linkTo: INavPath,
  svg: any
}

export const FavoriteLink: FC<IProps> = ({linkTo, svg: Svg}) => {
  return (
    <SC.NavLink href={linkTo}><Svg width={30} height={30}  fill="currentcolor"/></SC.NavLink>
  )
}