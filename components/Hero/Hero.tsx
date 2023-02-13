import { FC } from "react";
import { HiddenTitle } from "../HiddenTitle/HiddenTitle";
import { Text } from "../Text/Text";
import { Navigation } from "../Navigation/Navigation";
import { dataNavLinks } from "../../constants/dataNavLinks";
import { Box } from "../Box/Box";
import * as SC from "./Hero.styled";

export const Hero: FC = () => {
  return (
    <SC.Section>
      <Box>
        <HiddenTitle title="Cat finder application" />
        <Text marginTheme={[0, 0, 3, 0]} fs="xxl" fw="medium" lh="heading">
          Hi everyone!
        </Text>
        <Text marginTheme={[0, 0, 12, 0]} lh="text" color="textSecondary">
          Welcome to my pet-project.
        </Text>
        <Text marginTheme={[0, 0, 7, 0]} lh="text" fw="medium">
          Lets start using The Cat API
        </Text>
        <Navigation navLinks={dataNavLinks} />
      </Box>
    </SC.Section>
  );
};
