import { FC } from "react";
import { useRouter } from "next/router";
import { FavoriteLink } from "../FavoriteLink/FavoriteLink";
import { dataFavoriteLink } from "../../constants/dataNavLinks";
// import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import * as SC from "./FavoriteCatNavigation.styled";
import Stroke from "../../public/stroke.svg";

interface IProps {
  onShowMobileMenu: () => void;
  className?: string,
}

export const FavoriteCatNavigation: FC<IProps> = ({ onShowMobileMenu, className}) => {
  const { pathname } = useRouter();
  
  return (<SC.Wrapp>
    <SC.BtnShowMobileMenu svg={Stroke} width={30} height={18} primary onClick={onShowMobileMenu} />
    <SC.NavWrapp className={className}>
      {dataFavoriteLink.map(({link, svg}) => <SC.NavItem key={link.pathname} linkName={link.pathname} pathName={pathname}><FavoriteLink linkTo={link} svg={svg}/></SC.NavItem>)}
    </SC.NavWrapp>
  </SC.Wrapp>
  )
}