import { FC, useState } from "react";
import { useStore } from "../../Store/Store";
import { IDataCat } from "../../types/types";
import { useFavoriteCat } from "../../hooks/useFavoriteCat";
// import { addFovouriteCat, removeFavouriteCat } from "../../API/catAPI";
import { Loader } from "../Loader/Loader";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import * as SC from "./GalleryItem.styled";
// import FavouriteIcon from "../../public/fav.svg";
// import FavouriteFillIcon from "../../public/favColor.svg";

interface IProps {
  dataCat: IDataCat;
}

export const GalleryItem: FC<IProps> = ({ dataCat: { url, breeds, id } }) => {
const {lightTheme} = useStore()

  const { status, currentFavoriteIcon, onAddFavouriteCat } = useFavoriteCat(id);

  return (
    <>
      <SC.OverlayGalleryItem>
        <SC.ToggleInFavouriteBtn
          svg={currentFavoriteIcon}
          disabled={status === "pending"}
          primary
          width={20}
          height={20}
          onClick={onAddFavouriteCat}
          lightTheme={lightTheme}
        >
          <Loader size={35} visible={status === "pending"} />
        </SC.ToggleInFavouriteBtn>
      </SC.OverlayGalleryItem>
      <SC.Img
        src={url}
        alt={breeds.length !== 0 ? breeds[0].name : "cat"}
        fill
        sizes="(max-width: 767px) 100vw,
              (max-width: 1439px) 66vw,
              33vw"
      />
    </>
  );
};
