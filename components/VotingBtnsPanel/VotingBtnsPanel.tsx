import { FC, useState } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { useRouter } from "next/router";
import { useFavoriteCat } from "../../hooks/useFavoriteCat";
import { addVoteForCat } from "../../API/catAPI";
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
  // const [favorite, setFavorite] = useState(false);
  const {status, currentFavoriteIcon, onAddFavouriteCat } = useFavoriteCat(id);
  const router = useRouter();


  // const CurrentFavoriteIcon = favorite ? FavoriteFill : Favorite;

  const  icons = [Like, currentFavoriteIcon, Dislike];

  const onVotingOrLike = async (id:string, index?: number) => {
    switch (index) {
      case 0: createVote(id, 1);
        break;
      case 1: onAddFavouriteCat();
        break;
      case 2: createVote(id, -1);
}
  }

  const createVote = async (id: string, voteValue: number) => {
try {
  await addVoteForCat(id, voteValue);
  router.push("/voting");
} catch (error) {
  console.log(error);
}
  }

  return (
    <SC.ListBtns>

      {icons.map((icon , i) => <SC.WrappBtn key={icon} index={i}><Media greaterThanOrEqual="m">
          <SC.VotingButton
            svg={icon}
            width={30}
            height={30}
          onClick={() => onVotingOrLike(id, i)}
          index = {i}
          />
        </Media>
        <Media lessThan="m">
          <SC.VotingButton
            svg={icon}
            width={23}
            height={23}
            onClick={() => onVotingOrLike(id, i)}
            index = {i}
          />
        </Media></SC.WrappBtn>)}
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
