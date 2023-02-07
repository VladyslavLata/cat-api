import { FC } from "react";
import { GetServerSideProps } from "next";
import { getFavouritesCats } from "../../API/catAPI";
import { IFavouriteDataCat } from "../../types/types";
import { Container } from "../../components/Container/Container";
import { FavoriteCatNavigation } from "../../components/FavoriteCatNavigation/FavoriteCatNavigation";
import { BackPagePanel } from "../../components/BackPagePanel/BackPagePanel";


export const getServerSideProps: GetServerSideProps = async (context) => {
  const param = context.query;
  try {
    const data = await getFavouritesCats(param);
    return {
      props: {
        favouriteCatsData: data.favouriteCatsData,
        amountCats: data.amountCats,
      }
      // props: {
      //   catsData: data[0].catsData,
      //   amountCats: data[0].amountCats ? data[0].amountCats : null,
      //   categoties: data[1],
      // },
    };
  } catch (error) {
    return { notFound: true };
  }
};

interface IProps {
  favouriteCatsData: IFavouriteDataCat[];
  amountCats: string;
}


const FavouritesPage: FC<IProps> = ({ favouriteCatsData, amountCats }) => {
  console.log(favouriteCatsData);
  console.log(amountCats);
  return (
    <>
      <FavoriteCatNavigation />
      <Container>
        <BackPagePanel page="favourites" />
      </Container>
    </>
  );
};

export default FavouritesPage;
