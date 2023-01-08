import { FC } from "react";
import * as SC from "./InfoParamBreed.styled";

interface IProps {
  param: string;
  infoParam: string;
  text?: string;
}

export const InfoParamBreed: FC<IProps> = ({ param, infoParam, text = "" }) => {
  return (
    <SC.Info>
      <SC.Param>{`${param}:`}&nbsp;</SC.Param>
      {`${infoParam}${text}`}
    </SC.Info>
  );
};
