import { FC } from "react";
import { IVotingDataMessage } from "../../types/types";
import Like from "../../public/like.svg";
import Dislike from "../../public/dislike.svg";
import Favourite from "../../public/fav.svg";


interface IProps {
  messages: IVotingDataMessage[]
}

export const MessagesVoting: FC<IProps> = ({ messages }) => {
  
  const createMessage = (message: IVotingDataMessage) => {
  const {catId, date } = message;

    let Icon = null;
    let endOfMessage = "";
  
    if (message?.value) {
      const value = message.value;
      endOfMessage = value === 1 ? "added to Likes" : "added to Dislikes";
      Icon = value === 1 ? Like : Dislike;
    } else if (message?.favouriteCatId) {
      endOfMessage = "added to Favourites"
      Icon = Favourite;
    } else {
      endOfMessage= "removed from Favourites"
    }

    return <><p><span>{date.hours}:{date.minutes}</span>Image ID:&nbsp;{catId}&nbsp;was&nbsp;{endOfMessage}</p>{Icon && <div><Icon width={20 } height={20} fill="currentCollor" /></div>}</>
}

  return (
    <ul>
      {messages.map((message, i) => <li key={`${message.catId}${i}`}>{createMessage(message)}</li>)}
  </ul>
)
}