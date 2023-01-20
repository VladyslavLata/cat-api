import { FC, useState } from "react";
// import Link from "next/link";
import { IDataCat } from "../../types/types";
import { addFovouriteCat, removeFavouriteCat, getFavouritesCats } from "../../API/catAPI";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import * as SC from "./GalleryItem.styled";
import FavouriteIcon from "../../public/fav.svg";
import FavouriteFillIcon from "../../public/favColor.svg";

interface IProps {
  dataCat: IDataCat;
}

export const GalleryItem: FC<IProps> = ({ dataCat: { url, breeds, id } }) => {
  const [favourite, setFavourite] = useState(false);
  const [status, setStatus] = useState("idle");

  const toggleFavourite = () => {
    setFavourite(!favourite);
  };

  const onAddFavouriteCat = async () => {
    try {
      setStatus("pending");
      if (favourite) {
        await removeFavouriteCat(id);
      } else {
        await addFovouriteCat(id);
      }
      const dd = await getFavouritesCats();
      console.log(dd);
      setStatus("fulfilled");
      toggleFavourite();
    } catch (error) {
      setStatus("rejected");
    }
  };

  const currentIcon = favourite ? FavouriteFillIcon : FavouriteIcon;

  return (
    <>
      <SC.OverlayGalleryItem>
        <ButtonIcon
          svg={currentIcon}
          disabled={status === "pending"}
          primary
          width={20}
          height={20}
          onClick={onAddFavouriteCat}
        />
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
