import React, { FC } from "react";
import { useEffect } from "react";
import { getCatGallery, getAllBreeds } from "../../API/catAPI";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
// import { Button } from "../../components/Button/Button";
import { Gallery } from "../../components/Gallery/Gallery";
import { SelectWithDynamicParams } from "../../components/SelectWithDynamicParams/SelectWithDynamicParams";
import { Select } from "../../components/Select/Select";
import { IDataCat, IBreeds } from "../../types/types";
import { selectLimit } from "../../constants/selectDatas";
import { CurrentPage } from "../../components/CurrentPage/CurrentPage";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { Container } from "../../components/Container/Container";
import { ButtonsChangePages } from "../../components/ButtonsChangePages/ButtonsChangePages";
// import { ButtonGalleryWrapp } from "../../components/ButtonGalleryWrapp/ButtonGalleryWrapp";
import { BackButtonWrapp } from "../../components/BackButtonWrapp/BackButtonWrapp";
import { FavoriteCatNavigation } from "../../components/FavoriteCatNavigation/FavoriteCatNavigation";
import Arrow from "../../public/arrow.svg";
import * as SC from "../../styles/Breeds.styled";
import { useStore } from "../../Store/Store";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const param = context.query;
  try {
    const data = await Promise.all([getCatGallery(param), getAllBreeds()]);
    return {
      props: {
        catsData: data[0].catsData,
        amountCats: data[0].amountCats,
        allBreeds: data[1],
      },
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

const Breeds: FC<IProps> = ({ catsData, allBreeds, amountCats }) => {
  const router = useRouter();
  const params = router.query;
  const currentPage = Number(params.page);
  //  console.log(params);
  const { changeSelectsValue, changeAllSelectsValue, selectsValue } =
    useStore();

  // console.log(router);
  useEffect(() => {
    const handleRouteChange = () => {
      changeAllSelectsValue({
        ...selectsValue,
        limit: `${params.limit ? params.limit : "10" }`,
        breed_ids: `${params.breed_ids ? params.breed_ids : "allBreeds" }`,
      });
      console.log("1");
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [changeAllSelectsValue, params, router.events, selectsValue]);
  // const state = useStore((state) => state.selectsValue);
  // console.log(state);
  // console.log(catsData);
  // console.log(params);

  const changePage = (value: number) => {
    router.push({
      pathname: "/breeds",
      query: { ...params, page: currentPage + value },
    });
  };

  const onBackPage = () => {
    router.back();
    // console.log(selectsValue);
  };

  const changeParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueParam =
      e.currentTarget.value === "allBreeds" ? "" : e.currentTarget.value;

    router.push({
      pathname: "/breeds",
      query: { ...params, page: 0, [e.currentTarget.name]: valueParam },
    });

    changeSelectsValue(e.currentTarget.name, e.currentTarget.value);
  };

  const amountPage = () => {
    return Number(amountCats) / Number(params.limit) <= currentPage + 1;
  };

  return (
    <>
      <FavoriteCatNavigation />
      <Container>
        <SC.OptionWrapp>
          <BackButtonWrapp>
            <ButtonIcon
              svg={Arrow}
              width={20}
              height={20}
              onClick={onBackPage}
            />
            <CurrentPage title={"breeds"} />
          </BackButtonWrapp>
          <SC.SelectWrapp>
            <SelectWithDynamicParams
              optionValueDefault="allBreeds"
              optionDefault="All breeds"
              datas={allBreeds}
              name={"breed_ids"}
              // queryParam={params}
              onChange={changeParam}
            />
          </SC.SelectWrapp>
          <SC.SelectWrapp>
            <Select
              name={"limit"}
              selectDatas={selectLimit}
              // queryParam={params}
              onChange={changeParam}
              // value={state.limit}
            />
          </SC.SelectWrapp>
        </SC.OptionWrapp>
        <Gallery dataCats={catsData} />
        <ButtonsChangePages
          changePage={changePage}
          currentPage={currentPage}
          lastPage={amountPage()}
        />
      </Container>
    </>
  );
};

export default Breeds;
