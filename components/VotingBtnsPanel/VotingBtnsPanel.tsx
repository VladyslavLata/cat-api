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
import { randomInt } from "crypto";

interface IProps {
  id: string;
}

export const VotingBtnsPanel: FC<IProps> = ({ id }) => {
  // const [favorite, setFavorite] = useState(false);
  const { status, currentFavoriteIcon, onAddFavouriteCat } = useFavoriteCat(id);
  const router = useRouter();

  // const CurrentFavoriteIcon = favorite ? FavoriteFill : Favorite;
  //  const Cur = true ? Favorite : FavoriteFill;

  const icons = [Like, currentFavoriteIcon, Dislike];

  const onVotingOrLike = async (id: string, numberBtn?: number) => {
    switch (numberBtn) {
      case 1:
        createVote(id, 1);
        break;
      case 2:
        onAddFavouriteCat();
        break;
      case 3:
        createVote(id, -1);
    }
  };

  const createVote = async (id: string, voteValue: number) => {
    try {
      await addVoteForCat(id, voteValue);
      router.push("/voting");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SC.ListBtns>
      {[1, 2, 3].map((num, i) => (
        <SC.WrappBtn key={num} index={i}>
          <Media greaterThanOrEqual="m">
            <SC.VotingButton
              svg={icons[i]}
              width={30}
              height={30}
              onClick={() => onVotingOrLike(id, num)}
              index={i}
            />
          </Media>
          <Media lessThan="m">
            <SC.VotingButton
              svg={icons[i]}
              width={23}
              height={23}
              onClick={() => onVotingOrLike(id, num)}
              index={i}
            />
          </Media>
        </SC.WrappBtn>
      ))}
    </SC.ListBtns>
  );
};
