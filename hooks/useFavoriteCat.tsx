import { useState } from "react";
import { useRouter } from "next/router";
import { addFovouriteCat, removeFavouriteCat } from "../API/catAPI";
import FavouriteIcon from "../public/fav.svg";
import FavouriteFillIcon from "../public/favColor.svg";

export const useFavoriteCat = (id: string , idFavourite?:number | null) => {
  const [favouriteId, setFavouriteId] = useState<null | number>(idFavourite ? idFavourite : null);
  const [status, setStatus] = useState("idle");

  const router = useRouter()

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

  const onRemoveFavouriteCat = async () => {
    try {
      setStatus("pending");
      if (favouriteId) {
        await removeFavouriteCat(favouriteId);
        await router.push(router.asPath);
      } else {
        return
      } 
      setStatus("fulfilled");
    } catch (error) {
      setStatus("rejected");
    }
  }

  const resetFavouriteId = () => {
    setFavouriteId(null);
  }

  return { status, favouriteId, currentFavoriteIcon, onAddFavouriteCat, onRemoveFavouriteCat, resetFavouriteId}
}