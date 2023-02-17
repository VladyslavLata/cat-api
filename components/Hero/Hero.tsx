import { FC } from "react";
// import { useStore } from "../../Store/Store";
import { HiddenTitle } from "../HiddenTitle/HiddenTitle";
import { Text } from "../Text/Text";
import { useStore } from "../../Store/Store";
import { Navigation } from "../Navigation/Navigation";
import { dataNavLinks } from "../../constants/dataNavLinks";
import { Box } from "../Box/Box";
import * as SC from "./Hero.styled";

export const Hero: FC = () => {
  const {showModal}=useStore();
  // const [isBrowser, setIsBrowser] = useState(false);
  console.log(`showModal hero ${showModal}`);
  // useEffect(() => {
  //   setIsBrowser(true);
  // }, []);

  // if (isBrowser) {
  // const visibleModal = document.getElementById("modal-backdrop") ? true :  false ;
  // }
  // const {showModal } = useStore();

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
        <Navigation navLinks={dataNavLinks} linkVisible={!showModal}  />
      </Box>
    </SC.Section>
  );
};
