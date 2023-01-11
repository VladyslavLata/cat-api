import { FC } from "react";
import { useRouter } from "next/router";
import { IDataCat } from "../../types/types";
import { GalleryItemBreeds } from "../GalleryItemBreeds/GalleryItemBreeds";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import * as SC from "./Gallery.styled";

interface IProps {
  dataCats: IDataCat[];
}

export const Gallery: FC<IProps> = ({ dataCats }) => {
  
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <SC.List>
      {dataCats.map((dataCat) => (
        <SC.Item key={dataCat.id}>
          {pathname === "/breeds" && <GalleryItemBreeds dataCat={dataCat} />}
          {pathname ==="/gallery" && <GalleryItem dataCat={dataCat}/>}
        </SC.Item>
      ))}
    </SC.List>
  );
};
