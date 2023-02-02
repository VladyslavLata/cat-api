import { FC, useState } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import Like from "../../public/like.svg";
import Dislike from "../../public/dislike.svg";
import Favorite from "../../public/fav.svg";
import FavoriteFill from "../../public/favColor.svg";
import { Media } from "../../media";
import * as SC from "./VotingBtnsPanel.styled";

interface IProps {
  id: string;
}

export const VotingBtnsPanel: FC<IProps> = ({ id }) => {
  const [favorite, setFavorite] = useState(false);

  const CurrentFavoriteIcon = favorite ? FavoriteFill : Favorite;

  const  icons = [Like, CurrentFavoriteIcon, Dislike];

  const votingLike = (id:string): void => {
    console.log(id);
  }

  const votingFunctions = [votingLike]

  return (
    <SC.ListBtns>

      {icons.map((icon , i) => <li key={icon}><Media greaterThanOrEqual="m">
          <SC.VotingButton
            svg={icon}
            width={30}
            height={30}
            onClick={()=>votingFunctions[i](id)}
          />
        </Media>
        <Media lessThan="m">
          <SC.VotingButton
            svg={icon}
            width={23}
            height={23}
            onClick={()=>votingFunctions[i](id)}
          />
        </Media></li>)}
      {/* <li>
        <Media greaterThanOrEqual="m">
          <SC.VotingButton
            svg={Like}
            width={30}
            height={30}
            onClick={() => console.log("l")}
          />
        </Media>
        <Media lessThan="m">
          <SC.VotingButton
            svg={Like}
            width={23}
            height={23}
            onClick={() => console.log("l")}
          />
        </Media>
      </li>
      <li>
        <Media greaterThanOrEqual="m">
          <SC.VotingButton
            svg={CurrentFavoriteIcon}
            width={30}
            height={30}
            onClick={() => console.log("f")}
          />
        </Media>
        <Media lessThan="m">
          <SC.VotingButton
            svg={CurrentFavoriteIcon}
            width={23}
            height={23}
            onClick={() => console.log("f")}
          />
        </Media>
      </li>
      <li>
        <Media greaterThanOrEqual="m">
          <SC.VotingButton
            svg={Dislike}
            width={30}
            height={30}
            onClick={() => console.log("dl")}
          />
        </Media>
        <Media lessThan="m">
          <SC.VotingButton
            svg={Dislike}
            width={23}
            height={23}
            onClick={() => console.log("dl")}
          />
        </Media>
      </li> */}
    </SC.ListBtns>
  );
};
