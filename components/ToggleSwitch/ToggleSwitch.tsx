import { FC } from "react";
import { useStore } from "../../Store/Store";
import * as SC from "./ToggleSwitch.styled";

// interface IProps {
//   // lightT: boolean;
//   className?: string;
// }

export const ToggleSwitch: FC = () => {
  const { lightTheme, toggleTheme } = useStore();
  console.log(`theme l l l ${lightTheme}`);
  return (
    <SC.Switch lightTheme={lightTheme}>
      <SC.hiddenInput type="checkbox" checked={!lightTheme} onChange={toggleTheme}/>
      <SC.Slider></SC.Slider>
    </SC.Switch>
  );
};
