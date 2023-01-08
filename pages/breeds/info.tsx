import { FC } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getBreedInfo } from "../../API/catAPI";
import { Container } from "../../components/Container/Container.styled";
import { OptionWrapp } from "../../styles/Breeds.styled";
import { BackButtonWrapp } from "../../components/BackButtonWrapp/BackButtonWrapp";
import { CurrentPage } from "../../components/CurrentPage/CurrentPage";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { FavoriteCatNavigation } from "../../components/FavoriteCatNavigation/FavoriteCatNavigation";
import { InfoBreedBox } from "../../components/InfoBreedBox/InfoBreedBox";
import { CarouselBreedsImg } from "../../components/CarouselBreedsImg/CarouselBreedsImg";
import { IDataCat } from "../../types/types";
import Arrow from "../../public/arrow.svg";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const param = context.query;
  try {
    const data = await getBreedInfo(param);
    return {
      props: {
        breedInfo: data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

interface IProps {
  breedInfo: IDataCat[];
}

const BreedsInfo: FC<IProps> = ({ breedInfo }) => {
  const router = useRouter();

  console.log(breedInfo);

  return (
    <>
      <FavoriteCatNavigation />
      <Container>
        <OptionWrapp>
          <BackButtonWrapp>
            <ButtonIcon
              svg={Arrow}
              width={20}
              height={20}
              onClick={() => router.back()}
            />
            <CurrentPage title={"breeds"} />
          </BackButtonWrapp>
        </OptionWrapp>
        <CarouselBreedsImg dataCats={breedInfo}/>
        <InfoBreedBox info={breedInfo[0].breeds[0]} />
      </Container>
    </>
  );
};

export default BreedsInfo;
