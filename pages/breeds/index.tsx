import React, { FC } from "react";
import { getCatGallery } from "../../API/catAPI";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { Button } from "../../components/Button/Button";
import { Gallery } from "../../components/Gallery/Gallery";
import { GelleryItemBreeds } from "../../components/GelleryItemBreeds/GelleryItemBreeds";
import { Select } from "../../components/Select/Select";
import { IDataCat, IBreeds } from "../../types/types";
import { getAllBreeds } from "../../API/catAPI";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const param = context.query;
  try {
    const data = await Promise.all([getCatGallery(param), getAllBreeds()]) 
    return {
      props: { catsData: data[0], allBreeds: data[1],},
    };
  } catch (error) {
    return { notFound: true };
  }
};

interface IProps {
  catsData: IDataCat[],
  allBreeds: IBreeds[], 
}

const Breeds: FC<IProps> = ({ catsData, allBreeds }) => {
  const router = useRouter();
  const param = router.query;

  console.log(allBreeds);

  console.log(catsData);

  const changePage = (value: number) => {
    router.push({
      pathname: "/breeds",
      query: { ...param, page: Number(param.page) + value },
    });
  };

  const changeParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("change Param");
    router.push({
    pathname: "/breeds",
      query: { ...param, [e.currentTarget.name]: e.currentTarget.value},
    });
  }

  const btnDisabled = param.page === "0" ? true : false;

  return (
    <>
      <select onChange={(e) => console.log(e.currentTarget.value)}>
        <option value="1">1</option>
        <option value="2">3</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <Select breeds={allBreeds} name={"breed_ids"} onChange={changeParam} />
      <Button callback={() => changePage(-1)} disabled={btnDisabled}>
        -
      </Button>
      <Button callback={() => changePage(1)}>+</Button>
      <Gallery>
        <GelleryItemBreeds dataCats={catsData} />
      </Gallery>
    </>
  );
};


export default Breeds;

