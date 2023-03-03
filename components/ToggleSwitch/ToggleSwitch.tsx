import { FC } from "react";
import { useStore } from "../../Store/Store";
import * as SC from "./ToggleSwitch.styled";

interface IProps {
  className?: string;
}

export const ToggleSwitch: FC<IProps> = ({ className }) => {
  const { lightTheme, toggleTheme } = useStore();
  return (
    <SC.Switch lightTheme={lightTheme} className={className}>
      <SC.IconsWrapp lightTheme={lightTheme}>
        <SC.IconSun lighttheme={lightTheme.toString()}/>
        <SC.IconMoon lighttheme={lightTheme.toString()}/>
      </SC.IconsWrapp>
      <SC.hiddenInput
        type="checkbox"
        checked={!lightTheme}
        onChange={toggleTheme}
      />
      <SC.Slider></SC.Slider>
    </SC.Switch>
  );
};
