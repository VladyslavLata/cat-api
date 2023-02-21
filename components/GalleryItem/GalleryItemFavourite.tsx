import { FC, useState } from "react";
import { IFavouriteDataCat } from "../../types/types";
import { useFavoriteCat } from "../../hooks/useFavoriteCat";
import { Loader } from "../Loader/Loader";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import * as SC from "./GalleryItem.styled";

interface IProps {
  dataCat: IFavouriteDataCat;
}

export const GalleryItemFavourite: FC<IProps> = ({
  dataCat: { image_id, image, id },
}) => {
  const { status, currentFavoriteIcon, onRemoveFavouriteCat } = useFavoriteCat(
    image_id,
    id
  );

  return (
    <>
      <SC.OverlayGalleryItem>
        <ButtonIcon
          svg={currentFavoriteIcon}
          disabled={status === "pending"}
          primary
          width={20}
          height={20}
          onClick={onRemoveFavouriteCat}
        >
          <Loader size={35} visible={status === "pending"} />
        </ButtonIcon>
      </SC.OverlayGalleryItem>
      <SC.Img
        src={image.url}
        alt={"cat"}
        fill
        sizes="(max-width: 767px) 100vw,
              (max-width: 1439px) 66vw,
              33vw"
      />
    </>
  );
};
