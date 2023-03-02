import { FC } from "react";
import { useStore } from "../../Store/Store";
import * as SC from "./InfoParamBreed.styled";

interface IProps {
  param: string;
  infoParam: string;
  text?: string;
}

export const InfoParamBreed: FC<IProps> = ({ param, infoParam, text = "" }) => {
  const {lightTheme} = useStore();
  return (
    <SC.Info>
      <SC.Param lightTheme={lightTheme}>{`${param}:`}&nbsp;</SC.Param>
      {`${infoParam}${text}`}
    </SC.Info>
  );
};
