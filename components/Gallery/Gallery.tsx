import { FC } from "react";
import { useRouter } from "next/router";
import { IDataCat, IFavouriteDataCat, ILikeDataCat } from "../../types/types";
import { GalleryItemBreeds } from "../GalleryItemBreeds/GalleryItemBreeds";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import { GalleryItemFavourite } from "../GalleryItem/GalleryItemFavourite";
import { GalleryItemLike } from "../GalleryItem/GalleryItemLike";
import * as SC from "./Gallery.styled";

type IProps = {
  dataCats: IDataCat[] | IFavouriteDataCat[] | ILikeDataCat[];
};

export const Gallery: FC<IProps> = ({ dataCats }) => {
  const { pathname } = useRouter();

  if (!("image_id" in dataCats[0])) {
    const anyoneDataCats = dataCats as IDataCat[];
    return (
      <SC.List>
        {anyoneDataCats.map((anyoneDataCat) => (
          <SC.Item key={anyoneDataCat.id}>
            {pathname === "/breeds" && (
              <GalleryItemBreeds dataCat={anyoneDataCat} />
            )}
            {pathname === "/gallery" && <GalleryItem dataCat={anyoneDataCat} />}
          </SC.Item>
        ))}
      </SC.List>
    );
  } else {
    const favouriteDataCats = dataCats as ILikeDataCat[] | IFavouriteDataCat[];
    return (
      <SC.List>
        {favouriteDataCats.map((favouriteDataCat) => (
          <SC.Item key={favouriteDataCat.id}>
            {pathname === "/likes" && (
              <GalleryItemLike dataCat={favouriteDataCat} />
            )}
            {pathname === "/favourites" && (
              <GalleryItemFavourite dataCat={favouriteDataCat} />
            )}
          </SC.Item>
        ))}
      </SC.List>
    );
  }
};
