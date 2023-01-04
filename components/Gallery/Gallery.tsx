import { FC } from "react";
import { IDataCat } from "../../types/types";
import { GalleryItemBreeds } from "../GalleryItemBreeds/GalleryItemBreeds";

interface IProps {
  dataCats: IDataCat[];
}

export const Gallery: FC<IProps> = ({ dataCats }) => {
  return (
    <ul>
      {dataCats.map((dataCat) => (
        <li key={dataCat.id}>
          <GalleryItemBreeds dataCats={dataCat} />
        </li>
      ))}
    </ul>
  );
};
