import { FC } from "react";
import { GetServerSideProps } from "next";
import { getImgForVoting } from "../../API/catAPI";
import { IDataCat } from "../../types/types";
import { MainSharedLayoutPages } from "../../components/MainSharedLayoutPages/MainSharedLayoutPages";
import { BackPagePanel } from "../../components/BackPagePanel/BackPagePanel";
import { VotingPanel } from "../../components/VotingPanel/VotingPanel";

export const getServerSideProps: GetServerSideProps = async () => {
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
  return (
    <MainSharedLayoutPages
      pageTitle="Voting"
      pageDescription="Vote for your favorite cat breed"
    >
      <BackPagePanel page="voting" />
      <VotingPanel catData={catData} />
    </MainSharedLayoutPages>
  );
};

export default Voting;
