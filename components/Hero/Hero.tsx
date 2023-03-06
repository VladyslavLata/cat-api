import { FC } from "react";
import { HiddenTitle } from "../HiddenTitle/HiddenTitle";
import { Text } from "../Text/Text";
import { useStore } from "../../Store/Store";
import { Navigation } from "../Navigation/Navigation";
import { dataNavLinks } from "../../constants/dataNavLinks";
import * as SC from "./Hero.styled";

export const Hero: FC = () => {
  const {showModal, lightTheme}=useStore();

  const currentTextColor = lightTheme ? "textPrimary" : "testAccentSecondary";

  return (
    <SC.Section>
      <div>
        <HiddenTitle title="Cat finder application" />
        <Text marginTheme={[0, 0, 3, 0]} fs="xxl" fw="medium" lh="heading" color={currentTextColor} >
          Hi everyone!
        </Text>
        <Text marginTheme={[0, 0, 12, 0]} lh="text" color="textSecondary">
          Welcome to my pet-project.
        </Text>
        <Text marginTheme={[0, 0, 7, 0]} lh="text" fw="medium" color={currentTextColor}>
          Lets start using The Cat API
        </Text>
        <Navigation navLinks={dataNavLinks} linkVisible={!showModal}  />
      </div>
    </SC.Section>
  );
};
