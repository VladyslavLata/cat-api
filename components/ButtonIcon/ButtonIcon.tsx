import { FC, ReactNode } from "react";
import * as SC from "./ButtonIcon.styled";

interface IProps {
  svg: any,
  className?: string,
  primary?: boolean,
  disabled?: boolean,
  width: number,
  height: number,
  onClick: () => void,
  children?: ReactNode;
}

export const ButtonIcon: FC<IProps> = ({ svg: Svg, primary, width, height, className, disabled, onClick, children }) => {
  // const Svg = svg;
  return (
    <SC.BtnIcon className={className} type="button" primary={primary} onClick={onClick} disabled={disabled}>
      {children}
      <Svg width={width} height={height} fill="currentcolor" />
    </SC.BtnIcon>
  );
};
