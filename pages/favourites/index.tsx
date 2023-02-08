import { FC } from "react";
import { GetServerSideProps } from "next";
import { getFavouritesCats } from "../../API/catAPI";
import { IFavouriteDataCat } from "../../types/types";
import { Message } from "../../components/Message/Message";
import { Container } from "../../components/Container/Container";
import { Gallery } from "../../components/Gallery/Gallery";
import { FavoriteCatNavigation } from "../../components/FavoriteCatNavigation/FavoriteCatNavigation";
import { BackPagePanel } from "../../components/BackPagePanel/BackPagePanel";


export const getServerSideProps: GetServerSideProps = async (context) => {
  const param = context.query;
  try {
    const data = await getFavouritesCats(param);
    // const catsData = data?.favouriteCatsData ? data.favouriteCatsData : []
    const amountCat = data?.amountCats ? data?.amountCats : "0"
    return {
      props: {
        favouriteCatsData: data.favouriteCatsData,
        amountCats: amountCat,
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
        <BackPagePanel page="favourites"/>
        {favouriteCatsData.length > 0 && <Gallery dataCats={favouriteCatsData} />}
        {favouriteCatsData.length === 0 && <Message>No item found</Message> }
      </Container>
    </>
  );
};

export default FavouritesPage;
