import { FC, Dispatch, SetStateAction } from "react";
import { useStore } from "../../Store/Store";
import { useRouter } from "next/router";
import { useFavoriteCat } from "../../hooks/useFavoriteCat";
import { createDate } from "../../utils/createDate";
import { addVoteForCat } from "../../API/catAPI";
import Like from "../../public/like.svg";
import Dislike from "../../public/dislike.svg";
import { Media } from "../../media";
import { IVotingDataMessage } from "../../types/types";
import * as SC from "./VotingControlPanel.styled";

interface IProps {
  id: string;
  allMessage: IVotingDataMessage[] | [];
  updateMessages: Dispatch<SetStateAction<[] | IVotingDataMessage[]>>;
}

export const VotingControlPanel: FC<IProps> = ({
  id,
  allMessage,
  updateMessages,
}) => {
  const { lightTheme } = useStore();
  const {
    favouriteId,
    currentFavoriteIcon,
    onAddFavouriteCat,
    resetFavouriteId,
  } = useFavoriteCat(id);

  const router = useRouter();

  const icons = [Like, currentFavoriteIcon, Dislike];

  const onVotingOrLike = async (id: string, numberBtn?: number) => {
    switch (numberBtn) {
      case 1:
        await createVote(id, 1);
        resetFavouriteId();
        break;
      case 2:
        onAddFavouriteCat();
        updateMessages(() => [
          { catId: id, favouriteCatId: favouriteId, date: createDate() },
          ...allMessage,
        ]);
        break;
      case 3:
        await createVote(id, -1);
        resetFavouriteId();
    }
  };

  const createVote = async (id: string, voteValue: number) => {
    try {
      await addVoteForCat(id, voteValue);
      updateMessages(() => [
        { catId: id, value: voteValue, date: createDate() },
        ...allMessage,
      ]);
      router.push("/voting");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SC.ListBtns lightTheme={lightTheme}>
        {[1, 2, 3].map((num, i) => (
          <SC.WrappBtn key={num} index={i}>
            <Media greaterThanOrEqual="m">
              <SC.VotingButton
                svg={icons[i]}
                width={30}
                height={30}
                onClick={(e: any) => {
                  if (e?.nativeEvent?.pointerType === "mouse") {
                    e.currentTarget.blur();
                  }
                  onVotingOrLike(id, num);
                }}
                index={i}
              />
            </Media>
            <Media lessThan="m">
              <SC.VotingButton
                svg={icons[i]}
                width={23}
                height={23}
                onClick={() => {
                  onVotingOrLike(id, num);
                }}
                index={i}
              />
            </Media>
          </SC.WrappBtn>
        ))}
      </SC.ListBtns>
    </>
  );
};
