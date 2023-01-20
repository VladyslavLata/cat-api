import { FC } from "react";
import { Oval } from "react-loader-spinner";
import * as SC from "./Loader.styled";

interface IProps {
  size: number,
  visible: boolean,
  colorMain?: string,
  colorSecondary?: string,
  weight?: number, 
}

export const Loader: FC<IProps> = ({size, visible, colorMain = "#FBE0DC", colorSecondary = "#FF868E", weight = 2}) => {
  return (<SC.LoaderWrapp>
    <Oval
      height={size}
      width={size}
      color={colorSecondary}
      visible={visible}
      ariaLabel="oval-loading"
      secondaryColor={colorMain}
      strokeWidth={weight}
      strokeWidthSecondary={weight}
    /></SC.LoaderWrapp>
  );
};
