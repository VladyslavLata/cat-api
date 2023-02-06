import { FC, useState, MouseEvent, Dispatch, SetStateAction } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { useRouter } from "next/router";
import { useFavoriteCat } from "../../hooks/useFavoriteCat";
import { createDate } from "../../utils/createDate";
import { addVoteForCat } from "../../API/catAPI";
import Like from "../../public/like.svg";
import Dislike from "../../public/dislike.svg";
import Favorite from "../../public/fav.svg";
import FavoriteFill from "../../public/favColor.svg";
import { Media } from "../../media";
import { MessagesVoting } from "../MessagesVoting/MessagesVoting";
import { IVotingDataMessage } from "../../types/types";
import * as SC from "./VotingControlPanel.styled";


interface IProps {
  id: string,
  allMessage: IVotingDataMessage[] | [],
  updateMessages: Dispatch<SetStateAction<[] | IVotingDataMessage[]>>
  
}

export const VotingControlPanel: FC<IProps> = ({ id, allMessage, updateMessages  }) => {
  // const [currentImgCatFavoriteId, setCurrentImgCatFavoriteId] = useState<number | null>(null)
  // const [favorite, setFavorite] = useState(false);
  const { status, favouriteId, currentFavoriteIcon, onAddFavouriteCat, resetFavouriteId } = useFavoriteCat(id);
  // const [messages, setMessages] = useState<IVotingDataMessage[] | []>([]);
  
  const router = useRouter();

  // const CurrentFavoriteIcon = favorite ? FavoriteFill : Favorite;
  //  const Cur = true ? Favorite : FavoriteFill;

  const icons = [Like, currentFavoriteIcon, Dislike];

  const onVotingOrLike = async (id: string, numberBtn?: number) => {
    switch (numberBtn) {
      case 1:
       await createVote(id, 1);
        resetFavouriteId();
        break;
      case 2:
        onAddFavouriteCat();
        updateMessages(()=>[ {catId: id, favouriteCatId: favouriteId, date: createDate() } ,...allMessage])
        // setCurrentImgCatFavoriteId(favouriteId);
        break;
      case 3:
      await  createVote(id, -1);
        resetFavouriteId();
    }
  };

  const createVote = async (id: string, voteValue: number) => {
    try {
      await addVoteForCat(id, voteValue);
      updateMessages(()=> [{catId: id, value: voteValue, date: createDate() }, ...allMessage ])
      router.push("/voting");
    } catch (error) {
      console.log(error);
    }
  };

  // const onHoverBtn = (e: MouseEvent) => {
  //   e.preventDefault();
  //   if (e.target) {
  //     const btn = e.target as HTMLButtonElement;
  //     btn.classList.toggle("hover-btn")
   
  //   }
  // }

 

  return (<>
    <SC.ListBtns>
      {[1, 2, 3].map((num, i) => (
        <SC.WrappBtn key={num} index={i}>
          <Media greaterThanOrEqual="m">
            <SC.VotingButton
              svg={icons[i]}
              width={30}
              height={30}
              onClick={() => onVotingOrLike(id, num)}
              // onMouseOver={onHoverBtn}
              // onMouseOut={onHoverBtnEnd}
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
    {/* { messages.length && <MessagesVoting messages={messages} />} */}
  </>
  );
};
