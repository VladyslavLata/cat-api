import { FC, useState } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import Like from "../../public/like.svg";
import Dislike from "../../public/dislike.svg";
import Favorite from "../../public/fav.svg";
import FavoriteFill from "../../public/favColor.svg";
import * as SC from "./VotingBtnsPanel.styled";

interface IProps {
  id: string;
}

export const VotingBtnsPanel: FC<IProps> = ({ id }) => {
  const [favorite, setFavorite] = useState(false);

  const CurrentFavoriteIcon = favorite ? Favorite : FavoriteFill;

  return (
    <SC.ListBtns>
      <li>
        <ButtonIcon
          svg={Like}
          width={30}
          height={30}
          onClick={() => console.log("l")}
        />
      </li>
      <li>
        <ButtonIcon
          svg={CurrentFavoriteIcon}
          width={30}
          height={30}
          onClick={() => console.log("f")}
        />
      </li>
      <li>
        <ButtonIcon
          svg={Dislike}
          width={30}
          height={30}
          onClick={() => console.log("dl")}
        />
      </li>
    </SC.ListBtns>
  );
};
