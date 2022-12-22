import React, { FC } from "react";
import { getCatGallery } from "../../API/catAPI";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { Button } from "../../components/Button/Button";
import { Gallery } from "../../components/Gallery/Gallery";
import { GelleryItemBreeds } from "../../components/GelleryItemBreeds/GelleryItemBreeds";
import { SelectBreeds } from "../../components/SelectBreeds/SelectBreeds";
import { Select } from "../../components/Select/Select";
import { IDataCat, IBreeds } from "../../types/types";
import { getAllBreeds } from "../../API/catAPI";
import { selectLimit } from "../../constants/selectDatas";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const param = context.query;
  try {
    const data = await Promise.all([getCatGallery(param), getAllBreeds()]);
    return {
      props: { catsData: data[0].catsData, amountCats: data[0].amountCats , allBreeds: data[1], },
    };
  } catch (error) {
    return { notFound: true };
  }
};

interface IProps {
  catsData: IDataCat[];
  allBreeds: IBreeds[];
  amountCats: string;
}

const Breeds: FC<IProps> = ({ catsData, allBreeds, amountCats}) => {
  const router = useRouter();
  const params = router.query;
  const currentPage = Number(params.page);

// console.log(amountCats);

  // console.log(allBreeds);

  // console.log(catsData);

  const changePage = (value: number) => {
    router.push({
      pathname: "/breeds",
      query: { ...params, page: currentPage + value },
    });
  };

  const changeParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueParam =
      e.currentTarget.value === "allBreeds" ? "" : e.currentTarget.value;

    router.push({
      pathname: "/breeds",
      query: { ...params, page: 0, [e.currentTarget.name]: valueParam },
    });
  };

  const amountPage = () => {
   return Number(amountCats) / Number(params.limit) <= currentPage + 1;
  }

  return (
    <>
      <SelectBreeds
        optionValueDefault="allBreeds"
        optionDefault="All breeds"
        breeds={allBreeds}
        name={"breed_ids"}
        queryParam={params}
        onChange={changeParam}
      />
      <Select
        name={"limit"}
        selectDatas={selectLimit}
        queryParam={params}
        onChange={changeParam}
      />
      <Button callback={() => changePage(-1)} disabled={currentPage === 0}>
        -
      </Button>
      <Button callback={() => changePage(1)} disabled={amountPage()}>+</Button>
      <Gallery>
        <GelleryItemBreeds dataCats={catsData} />
      </Gallery>
    </>
  );
};

export default Breeds;
