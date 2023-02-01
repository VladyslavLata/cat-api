import { FC } from "react";
import { GetServerSideProps } from "next";
import { getBreedInfo } from "../../API/catAPI";
import { Container } from "../../components/Container/Container.styled";
import { OptionWrapp } from "../../styles/Breeds.styled";
import { BackPagePanel } from "../../components/BackPagePanel/BackPagePanel";
import { FavoriteCatNavigation } from "../../components/FavoriteCatNavigation/FavoriteCatNavigation";
import { InfoBreedBox } from "../../components/InfoBreedBox/InfoBreedBox";
import { CarouselBreedsImg } from "../../components/CarouselBreedsImg/CarouselBreedsImg";
import { IDataCat } from "../../types/types";

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
  console.log(breedInfo);

  return (
    <>
      <FavoriteCatNavigation />
      <Container>
        <OptionWrapp>
          <BackPagePanel page="breeds"/>
        </OptionWrapp>
        <CarouselBreedsImg dataCats={breedInfo} />
        <InfoBreedBox info={breedInfo[0].breeds[0]} />
      </Container>
    </>
  );
};

export default BreedsInfo;
