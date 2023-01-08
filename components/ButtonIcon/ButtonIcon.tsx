import { FC } from "react";
import * as SC from "./ButtonIcon.styled";

interface IProps {
  svg: any,
  primary?:boolean,
  width: number,
  height: number,
  onClick: ()=>void,
}

export const ButtonIcon: FC<IProps> = ({ svg: Svg, primary, width, height, onClick }) => {
  // const Svg = svg;
  return (
    <SC.ButtonIcon type="button" primary={primary} onClick={onClick}>
      <Svg width={width} height={height} fill="currentcolor" />
    </SC.ButtonIcon>
  );
};
