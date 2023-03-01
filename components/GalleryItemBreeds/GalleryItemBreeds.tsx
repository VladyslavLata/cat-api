import { FC } from "react";
import { useStore } from "../../Store/Store";
import { IDataCat } from "../../types/types";
import { Overlay } from "../Overlay/Overlay";
import * as SC from "./GalleryItemBreeds.styled";

interface IProps {
  dataCat: IDataCat;
}

export const GalleryItemBreeds: FC<IProps> = ({
  dataCat: { url, breeds }
}) => {
  const {lightTheme} = useStore();
  const breedID = breeds[0].id;
  return (
      <SC.LinkBreedsInfo href={{
      pathname: '/breeds/info',
      query: {
        breed_ids: breedID,
        limit: "7",
      }
          }}>
      <Overlay>
        <SC.BreedsName lightTheme={lightTheme}>{breeds[0].name}</SC.BreedsName>
      </Overlay>
      <SC.Img
        src={url}
        alt={breeds[0].name}
        fill
        sizes="(max-width: 767px) 100vw,
              (max-width: 1439px) 66vw,
              33vw"
      />
    </SC.LinkBreedsInfo>
  
  );
};
