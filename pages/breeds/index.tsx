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
      props: { catsData: data[0], allBreeds: data[1] },
    };
  } catch (error) {
    return { notFound: true };
  }
};

interface IProps {
  catsData: IDataCat[];
  allBreeds: IBreeds[];
}

const Breeds: FC<IProps> = ({ catsData, allBreeds }) => {
  const router = useRouter();
  const params = router.query;

  // console.log(allBreeds);

  // console.log(catsData);

  const changePage = (value: number) => {
    router.push({
      pathname: "/breeds",
      query: { ...params, page: Number(params.page) + value },
    });
  };

  const changeParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueParam =
      e.currentTarget.value === "allBreeds" ? "" : e.currentTarget.value;

    router.push({
      pathname: "/breeds",
      query: { ...params, [e.currentTarget.name]: valueParam, page: "0" },
    });
  };

  const btnDisabled = params.page === "0" ? true : false;

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
