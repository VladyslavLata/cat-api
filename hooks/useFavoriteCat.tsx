import { useState } from "react";
import { addFovouriteCat, removeFavouriteCat } from "../API/catAPI";
import FavouriteIcon from "../public/fav.svg";
import FavouriteFillIcon from "../public/favColor.svg";

export const useFavoriteCat = (id: string) => {
  const [favouriteId, setFavouriteId] = useState<null | number>(null);
  const [status, setStatus] = useState("idle");

  const currentFavoriteIcon = favouriteId ? FavouriteFillIcon : FavouriteIcon;
  
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

  return {status, currentFavoriteIcon, onAddFavouriteCat}
}