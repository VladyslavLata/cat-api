import { FC } from "react";
import { ILikeDataCat } from "../../types/types";
import * as SC from "./GalleryItem.styled"
import Like from "../../public/like.svg";
import DisLike from "../../public/dislike.svg";

interface IProps {
dataCat: ILikeDataCat 
}

export const GalleryItemLike: FC<IProps> = ({ dataCat: { image, value } }) => {
  
  const IconLike = value > 0 ? Like : DisLike;
  const iconColor = value > 0 ? "#97EAB9" : "#FFD280"; 

  return (<>
      <SC.Img
        src={image.url}
        alt={"cat"}
        fill
        sizes="(max-width: 767px) 100vw,
              (max-width: 1439px) 66vw,
              33vw"
    />
    <IconLike width={25} height={25} fill={iconColor} />
  </>
    );
}