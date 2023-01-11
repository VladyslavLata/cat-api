import { FC } from "react";
// import Link from "next/link";
import { IDataCat } from "../../types/types";
import { Overlay } from "../Overlay/Overlay";
import * as SC from "./GalleryItem.styled";


interface IProps {
  dataCat: IDataCat;
}

export const GalleryItem: FC<IProps> = ({
  dataCat: { url, breeds }
}) => {
  // const breedID = breeds[0].id;
  return (
     <>
      <Overlay>
      </Overlay>
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
