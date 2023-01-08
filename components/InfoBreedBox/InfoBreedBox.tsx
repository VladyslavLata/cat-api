import { FC } from "react";
import { IBreeds } from "../../types/types";
import { InfoParamBreed } from "../InfoParamBreed/InfoParamBreed";
import { Box } from "../Box/Box";
import * as SC from "./InfoBreedBox.styled";

interface IProps {
  info: IBreeds;
}

export const InfoBreedBox: FC<IProps> = ({ info }) => {
  const { id, name, description, temperament, origin, life_span, weight } =
    info;
  return (
    <SC.InfoBreedWrapp>
      <SC.BreedName>{name}</SC.BreedName>
      <SC.Description>{description}</SC.Description>
      <SC.InfoBreedList>
        <SC.InfoBreedItem>
          <InfoParamBreed param={"Temperament"} infoParam={temperament} />
        </SC.InfoBreedItem>
        <SC.InfoBreedItem>
          <InfoParamBreed param={"Origin"} infoParam={origin} />
        </SC.InfoBreedItem>
        <SC.InfoBreedItem>
          <InfoParamBreed param={"Weight"} infoParam={weight.metric} text={" kgs"} />
        </SC.InfoBreedItem>
        <SC.InfoBreedItem>
          <InfoParamBreed param={"Life span"} infoParam={life_span} text={" years"}/>
        </SC.InfoBreedItem>
      </SC.InfoBreedList>
    </SC.InfoBreedWrapp>
  );
};
