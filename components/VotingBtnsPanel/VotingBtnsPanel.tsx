import { FC, useState } from "react";
import { BtnIcon } from "../ButtonIcon/ButtonIcon.styled";
import Like from "../../public/like.svg";
import Dislike from "../../public/dislike.svg";
import Favorite from "../../public/fav.svg";
import FavoriteFill from "../../public/favColor.svg"; 

interface IProps {
  id: string,
}

export const VotingBtnsPanel:FC<IProps> = ({id}) => {
  const [favorite, setFavorite] = useState(false);
  
  const CurrentFavoriteIcon = favorite ? Favorite : FavoriteFill;
  const IconBtns = [Like, CurrentFavoriteIcon, Dislike];
  return (
    <ul>
      {IconBtns.map(Icon => <li key={`${Icon}`}><BtnIcon svg={Icon} width={30} height={30} onClick={() => console.log("f")} /></li>)}
</ul>
  )
  }
