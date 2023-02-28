import { FC } from "react";
import { useRouter } from "next/router";
import { useStore } from "../../Store/Store"; 
import { FavoriteLink } from "../FavoriteLink/FavoriteLink";
import { dataFavoriteLink } from "../../constants/dataNavLinks";
import * as SC from "./FavoriteCatNavigation.styled";
import Stroke from "../../public/stroke.svg";

interface IProps {
  onShowMobileMenu: () => void;
  className?: string,
}

export const FavoriteCatNavigation: FC<IProps> = ({ onShowMobileMenu, className}) => {
  const { pathname } = useRouter();
  const {lightTheme } = useStore();
  
  return (<SC.Wrapp>
    <SC.BtnShowMobileMenu svg={Stroke} width={30} height={18} primary onClick={onShowMobileMenu} />
    <SC.NavWrapp className={className}>
      {dataFavoriteLink.map(({link, svg}) => <SC.NavItem key={link.pathname} linkName={link.pathname} pathName={pathname} lightTheme={lightTheme}><FavoriteLink linkTo={link} svg={svg}/></SC.NavItem>)}
    </SC.NavWrapp>
  </SC.Wrapp>
  )
}