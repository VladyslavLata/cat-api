import { FC } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { MainSharedLayoutPages } from "../../components/MainSharedLayoutPages/MainSharedLayoutPages";
import { SharedLayoutLikedPage } from "../../components/SharedLayoutLikedPage/SharedLayoutLikedPage";
import { ButtonsChangePages } from "../../components/ButtonsChangePages/ButtonsChangePages";
import { Gallery } from "../../components/Gallery/Gallery";
import { BackPagePanel } from "../../components/BackPagePanel/BackPagePanel";
import { Message } from "../../components/Message/Message";
import { ILikeDataCat } from "../../types/types";
import { getVotedCat } from "../../API/catAPI";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const param = context.query;
  try {
    const data = await getVotedCat(param);
    const amountCat = data?.amountCats ? data.amountCats : "0";

    return {
      props: {
        likeCatsData: data.likeCatsData,
        amountCats: amountCat,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

interface IProps {
  likeCatsData: ILikeDataCat[];
  amountCats: string;
}

const DisLikes: FC<IProps> = ({ likeCatsData, amountCats }) => {
  console.log(likeCatsData);
  console.log(amountCats);
  const router = useRouter();
  const { query, pathname } = router;
  const currentPage = Number(query.page);



  return (
    <MainSharedLayoutPages  pageTitle="DisLikes" pageDescription="Cat pictures you dislike">
    {/* <SharedLayoutLikedPage pageName="favourites" pageTitle="Like" pageDescription="Cat pictures you like"> */}
      <BackPagePanel page="dislikes"/>
      {likeCatsData.length > 0 && <Gallery dataCats={likeCatsData} />}
      {likeCatsData.length === 0 && currentPage === 0 && <Message>No item found</Message>}
      {Number(amountCats) > 10 && <ButtonsChangePages amountCats={amountCats} />}
    {/* </SharedLayoutLikedPage> */}
  </MainSharedLayoutPages>
    // <>
    //   <FavoriteCatNavigation />
    //   <SC.ContainerWrapp>
    //     <Container>
    //       <BackPagePanel page="favourites" />

    //     </Container>
    //   </SC.ContainerWrapp>
    // </>
  );
};



export default DisLikes;