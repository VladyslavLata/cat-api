import { FC, useState } from "react";
import { IDataCat } from "../../types/types";
import { addFovouriteCat, removeFavouriteCat } from "../../API/catAPI";
import { Loader } from "../Loader/Loader";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import * as SC from "./GalleryItem.styled";
import FavouriteIcon from "../../public/fav.svg";
import FavouriteFillIcon from "../../public/favColor.svg";

interface IProps {
  dataCat: IDataCat;
}

export const GalleryItem: FC<IProps> = ({ dataCat: { url, breeds, id } }) => {
  const [favouriteId, setFavouriteId] = useState<null | number>(null);
  const [status, setStatus] = useState("idle");

  const onAddFavouriteCat = async () => {
    try {
      setStatus("pending");
      if (favouriteId) {
        await removeFavouriteCat(favouriteId);
        setFavouriteId(null);
      } else {
        const respons = await addFovouriteCat(id);
        setFavouriteId(respons.id);
      }
      setStatus("fulfilled");
    } catch (error) {
      setStatus("rejected");
    }
  };

  const currentIcon = favouriteId ? FavouriteFillIcon : FavouriteIcon;

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
        >
          <Loader size={35} visible={status === "pending"} />
        </ButtonIcon>
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
