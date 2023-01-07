import { FC } from "react";
import { IDataCat } from "../../types/types";
import { GalleryItemBreeds } from "../GalleryItemBreeds/GalleryItemBreeds";
import * as SC from "./Gallery.styled";

interface IProps {
  dataCats: IDataCat[];
}

export const Gallery: FC<IProps> = ({ dataCats }) => {
  return (
    <SC.List>
      {dataCats.map((dataCat) => (
        <SC.Item key={dataCat.id}>
          <GalleryItemBreeds  dataCat={dataCat} />
        </SC.Item>
      ))}
    </SC.List>
  );
};
