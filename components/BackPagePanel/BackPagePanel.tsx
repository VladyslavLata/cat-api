import { FC } from "react";
import { useRouter } from "next/router";
import { useStore } from "../../Store/Store";
import { BackButtonWrapp } from "../BackButtonWrapp/BackButtonWrapp";
import { CurrentPage } from "../CurrentPage/CurrentPage";
import Arrow from "../../public/arrow.svg";
import * as SC from "./BackPagePanel.styled";

interface IProps {
  page: string;
}

export const BackPagePanel: FC<IProps> = ({ page }) => {
  const router = useRouter();
  const {lightTheme} =useStore()

  return (
    <BackButtonWrapp>
      <SC.BackButton
        svg={Arrow}
        width={20}
        height={20}
        lightTheme={lightTheme}
        onClick={() => router.back()}
      />
      <CurrentPage title={page} />
    </BackButtonWrapp>
  );
};
