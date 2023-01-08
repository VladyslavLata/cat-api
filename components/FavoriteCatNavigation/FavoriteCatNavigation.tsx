import { FC } from "react";
import { useRouter } from "next/router";
import { FavoriteLink } from "../FavoriteLink/FavoriteLink";
import { dataFavoriteLink } from "../../constants/dataNavLinks";
import * as SC from "./FavoriteCatNavigation.styled";

export const FavoriteCatNavigation: FC = () => {
  const { pathname } = useRouter();
  
  return (
    <SC.NavWrapp>
      {dataFavoriteLink.map(({link, svg}) => <SC.NavItem key={link} linkName={link} pathName={pathname}><FavoriteLink linkTo={link} svg={svg}/></SC.NavItem>)}
    </SC.NavWrapp>
  )
}