import Head from "next/head";
import { FC } from "react";
import { GetServerSideProps } from "next";
import { getCatGallery, getImgForVoting } from "../../API/catAPI";
import { IDataCat } from "../../types/types";
import { FavoriteCatNavigation } from "../../components/FavoriteCatNavigation/FavoriteCatNavigation";
import { Container } from "../../components/Container/Container"; 
import { MainSharedLayoutPages } from "../../components/MainSharedLayoutPages/MainSharedLayoutPages";
import { BackPagePanel } from "../../components/BackPagePanel/BackPagePanel";
import { VotingPanel } from "../../components/VotingPanel/VotingPanel";


export const getServerSideProps: GetServerSideProps = async () => {
  // const param = context.query;
  try {
    const data = await getImgForVoting();
    return {
      props: {
        catData: data[0],
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

interface IProps {
  catData: IDataCat;
}


const Voting: FC<IProps> = ({ catData }) => {
  console.log(catData);
  return (
    <MainSharedLayoutPages pageTitle="Voting" pageDescription="Vote for your favorite cat breed">
        <BackPagePanel page="voting" />
        <VotingPanel catData={catData}/>
    </MainSharedLayoutPages>
    // <>
    //   <Head>
    //     <title>Voting</title>
    //     <meta
    //       name="description"
    //       content="Vote for your favorite cat breed"
    //     />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <FavoriteCatNavigation />
    //   <Container>
      
    //   </Container>
    // </>
  );
};

export default Voting;
