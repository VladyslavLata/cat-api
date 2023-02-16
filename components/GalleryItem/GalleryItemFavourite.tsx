import { FC, useState } from "react";
import { IFavouriteDataCat } from "../../types/types";
import { useFavoriteCat } from "../../hooks/useFavoriteCat";
// import { addFovouriteCat, removeFavouriteCat } from "../../API/catAPI";
import { Loader } from "../Loader/Loader";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import * as SC from "./GalleryItem.styled";
// import FavouriteIcon from "../../public/fav.svg";
// import FavouriteFillIcon from "../../public/favColor.svg";

interface IProps {
  dataCat: IFavouriteDataCat;
}

export const GalleryItemFavourite: FC<IProps> = ({ dataCat: {image_id, image, id} }) => {

  const { status, currentFavoriteIcon, onRemoveFavouriteCat } = useFavoriteCat(image_id, id);
  // const [favouriteId, setFavouriteId] = useState<null | number>(null);
  // const [status, setStatus] = useState("idle");

  // const onAddFavouriteCat = async () => {
  //   try {
  //     setStatus("pending");
  //     if (favouriteId) {
  //       await removeFavouriteCat(favouriteId);
  //       setFavouriteId(null);
  //     } else {
  //       const respons = await addFovouriteCat(id);
  //       setFavouriteId(respons.id);
  //     }
  //     setStatus("fulfilled");
  //   } catch (error) {
  //     setStatus("rejected");
  //   }
  // };

  // const currentIcon = favouriteId ? FavouriteFillIcon : FavouriteIcon;

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