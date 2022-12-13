import Head from "next/head";
import { FC } from "react";




const Voting: FC = () => {
  return (
    <>
      <Head>
        <title>Voting</title>
        <meta
          name="description"
          content="Vote for your favorite cat breed"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <p>VOTING</p>
    </>
  );
};

export default Voting;
