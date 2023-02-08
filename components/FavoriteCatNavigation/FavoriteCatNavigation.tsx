import { FC } from "react";
import { useRouter } from "next/router";
import { FavoriteLink } from "../FavoriteLink/FavoriteLink";
import { dataFavoriteLink } from "../../constants/dataNavLinks";
import * as SC from "./FavoriteCatNavigation.styled";

interface IProps {
  className?: string,
}

export const FavoriteCatNavigation: FC<IProps> = ({ className}) => {
  const { pathname } = useRouter();
  
  return (
    <SC.NavWrapp className={className}>
      {dataFavoriteLink.map(({link, svg}) => <SC.NavItem key={link.pathname} linkName={link.pathname} pathName={pathname}><FavoriteLink linkTo={link} svg={svg}/></SC.NavItem>)}
    </SC.NavWrapp>
  )
}