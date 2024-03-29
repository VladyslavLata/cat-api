import { FC } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getFavouritesCats } from "../../API/catAPI";
import { IFavouriteDataCat } from "../../types/types";
import { Message } from "../../components/Message/Message";
import { MainSharedLayoutPages } from "../../components/MainSharedLayoutPages/MainSharedLayoutPages";
import { Gallery } from "../../components/Gallery/Gallery";
import { ButtonsChangePages } from "../../components/ButtonsChangePages/ButtonsChangePages";
import { BackPagePanel } from "../../components/BackPagePanel/BackPagePanel";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const param = context.query;
  try {
    const data = await getFavouritesCats(param);
    const amountCat = data?.amountCats ? data.amountCats : "0";

    return {
      props: {
        favouriteCatsData: data.favouriteCatsData,
        amountCats: amountCat,
      },
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
  const router = useRouter();
  const { query, pathname } = router;
  const currentPage = Number(query.page);

  if (favouriteCatsData.length === 0 && amountCats === "0" && currentPage > 0) {
    router.replace({
      pathname: pathname,
      query: { ...query, page: currentPage - 1 },
    });
  }

  return (
    <MainSharedLayoutPages
      pageTitle="Favorites"
      pageDescription="Your favorite cat images"
    >
      <BackPagePanel page="favorites" />
      {favouriteCatsData.length > 0 && <Gallery dataCats={favouriteCatsData} />}
      {favouriteCatsData.length === 0 && currentPage === 0 && (
        <Message>No item found</Message>
      )}
      {Number(amountCats) > 10 && (
        <ButtonsChangePages amountCats={amountCats} />
      )}
    </MainSharedLayoutPages>
  );
};

export default FavouritesPage;
