import { FC } from "react";
import { ILikeDataCat, IFavouriteDataCat } from "../../types/types";
import * as SC from "./GalleryItem.styled"

interface IProps {
dataCat: ILikeDataCat | IFavouriteDataCat
}

export const GalleryItemLike: FC<IProps> = ({ dataCat: {image} }) => {

  return (
      <SC.Img
        src={image.url}
        alt={"cat"}
        fill
        sizes="(max-width: 767px) 100vw,
              (max-width: 1439px) 66vw,
              33vw"
      />
    );
}