import { FC } from "react";
import { useStore } from "../../Store/Store";
import * as SC from "./ToggleSwitch.styled";
import Sun from "../../public/sun.svg";
import Moon from "../../public/moon.svg";

interface IProps {
  className?: string;
}

export const ToggleSwitch: FC<IProps> = ({ className }) => {
  const { lightTheme, toggleTheme } = useStore();
  console.log(`theme l l l ${lightTheme}`);
  return (
    <SC.Switch lightTheme={lightTheme} className={className}>
      <SC.IconsWrapp lightTheme={lightTheme}>
        <SC.IconSun lightTheme={lightTheme}/>
        <SC.IconMoon lightTheme={lightTheme}/>
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
