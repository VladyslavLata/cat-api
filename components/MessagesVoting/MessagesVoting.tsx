import { FC } from "react";
import { IVotingDataMessage } from "../../types/types";
import { Text } from "../Text/Text";
import Like from "../../public/like.svg";
import Dislike from "../../public/dislike.svg";
import Favourite from "../../public/fav.svg";
import * as SC from "./MessagesVoting.styled";

interface IProps {
  messages: IVotingDataMessage[];
}

export const MessagesVoting: FC<IProps> = ({ messages }) => {
  const createMessage = (message: IVotingDataMessage) => {
    const { catId, date } = message;

    let endOfMessage = "";
    let Icon = null;
    let IconColor = "#FF868E";

    if (message?.value) {
      const value = message.value;
      endOfMessage = value === 1 ? "added to Likes" : "added to Dislikes";
      Icon = value === 1 ? Like : Dislike;
      IconColor = value === 1 ? "#97EAB9" : "#FFD280";
    } else if (message?.favouriteCatId) {
      endOfMessage = "removed from Favourites";
    }
    else {
      endOfMessage = "added to Favourites";
      Icon = Favourite;
    }

    return (
      <>
        <SC.Time fs="sm">
          {date.hours}:{date.minutes}
        </SC.Time>
        <Text fs="sm" color="textSecondary">
          Image ID:{" "}
          <Text tag="span" fw="medium">
            {catId}
          </Text>{" "}
          was {endOfMessage}
          </Text>
        {Icon && (
          <SC.IconWrapp>
            <Icon width={20} height={20} fill={IconColor} />
          </SC.IconWrapp>
        )}
      </>
    );
  };

  return (
    <SC.MessageList>
      {messages.map((message, i) => (
        <SC.MessageItem key={`${message.catId}${i}`}>
          {createMessage(message)}
        </SC.MessageItem>
      ))}
    </SC.MessageList>
  );
};
