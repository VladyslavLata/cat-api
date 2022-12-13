import Head from "next/head";
import { FC } from "react";
import { Media } from "../media";
import { Hero } from "../components/Hero/Hero";
import { Header } from "../components/Heder/Header";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Cat finder application. Main navigation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Media lessThan="l">
        <Header />
        <Hero />
      </Media>
    </>
  );
};

export default Home;
