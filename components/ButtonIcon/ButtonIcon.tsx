import { FC } from "react";
import * as SC from "./ButtonIcon.styled";

interface IProps {
  svg: any,
  className?: string,
  primary?: boolean,
  disabled?: boolean,
  width: number,
  height: number,
  onClick: ()=>void,
}

export const ButtonIcon: FC<IProps> = ({ svg: Svg, primary, width, height, className, disabled, onClick }) => {
  // const Svg = svg;
  return (
    <SC.BtnIcon className={className} type="button" primary={primary} onClick={onClick} disabled={disabled}>
      <Svg width={width} height={height} fill="currentcolor" />
    </SC.BtnIcon>
  );
};
