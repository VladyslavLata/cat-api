import { FC } from "react";
import * as SC from "./ToggleSwitch.styled";

interface IProps {
  lightTheme: boolean;
}

export const ToggleSwitch: FC<IProps> = ({ lightTheme }) => {
  return (
    <SC.Switch lightTheme={lightTheme}>
      <SC.hiddenInput type="checkbox" />
      <SC.Slider></SC.Slider>
    </SC.Switch>
  );
};
