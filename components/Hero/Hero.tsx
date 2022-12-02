import { FC } from "react";
import { HiddenTitle } from "../HiddenTitle/HiddenTitle";
import { Text } from "../Text/Text";

export const Hero: FC = () => {
  return (
    <section>
      <HiddenTitle  title="Cat API, main navigation"/>
      <Text marginTheme={[0, 0, 3, 0]} fs="xxl" fw="medium" lh="heading">Hi intern!</Text>
      <Text marginTheme={[0, 0, 12, 0]} lh="text" color="textSecondary">Welcome to MI 2022 Front-end test</Text>
      <Text>Lets start using The Cat API</Text>
    </section>
  )
}