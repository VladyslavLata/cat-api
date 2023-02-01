import { FC } from "react";
import { useRouter } from "next/router";
import { BackButtonWrapp } from "../BackButtonWrapp/BackButtonWrapp";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { CurrentPage } from "../CurrentPage/CurrentPage";
import Arrow from "../../public/arrow.svg";

interface IProps {
  page: string;
}

export const BackPagePanel: FC<IProps> = ({ page }) => {
  const router = useRouter();

  return (
    <BackButtonWrapp>
      <ButtonIcon
        svg={Arrow}
        width={20}
        height={20}
        onClick={() => router.back()}
      />
      <CurrentPage title={page} />
    </BackButtonWrapp>
  );
};
