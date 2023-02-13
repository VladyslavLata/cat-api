import React, { FC} from "react";
import { getCatGallery, getAllBreeds } from "../../API/catAPI";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useUbdateStateSelectsValue } from "../../hooks/useUbdateStateSelectsValue";
import { useChangeSelectsValue } from "../../hooks/useChangeSelectsValue";
// import { useShowMobileMenu } from "../../hooks/useShowMobileMenu";
import { Gallery } from "../../components/Gallery/Gallery";
import { BackPagePanel } from "../../components/BackPagePanel/BackPagePanel";
import { SelectWithDynamicParams } from "../../components/SelectWithDynamicParams/SelectWithDynamicParams";
import { Select } from "../../components/Select/Select";
import { IDataCat, IBreeds } from "../../types/types";
import { selectLimit } from "../../constants/selectDatas";
import { MainSharedLayoutPages } from "../../components/MainSharedLayoutPages/MainSharedLayoutPages";
import { Container } from "../../components/Container/Container";
import { ButtonsChangePages } from "../../components/ButtonsChangePages/ButtonsChangePages";
import { FavoriteCatNavigation } from "../../components/FavoriteCatNavigation/FavoriteCatNavigation";
import * as SC from "../../styles/Breeds.styled";

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
// const {showMobileMenu, toggleMobileMenu} = useShowMobileMenu()

  const router = useRouter();
  const params = router.query;
  const currentPage = Number(params.page);

  const { changeBreedsSelectsValue } = useChangeSelectsValue();
 
  useUbdateStateSelectsValue(changeBreedsSelectsValue);

  // const changePage = (value: number) => {
  //   router.push({
  //     pathname: "/breeds",
  //     query: { ...params, page: currentPage + value },
  //   });
  // };

  const changeParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueParam =
      e.currentTarget.value === "allBreeds" ? "" : e.currentTarget.value;

    router.push({
      pathname: "/breeds",
      query: { ...params, page: 0, [e.currentTarget.name]: valueParam },
    });

    // changeSelectsValue(e.currentTarget.name, e.currentTarget.value);
  };

  // const amountPage = () => {
  //   return Number(amountCats) / Number(params.limit) <= currentPage + 1;
  // };

  return (
    // <>
    //   <FavoriteCatNavigation onShowMobileMenu={toggleMobileMenu} />
    //   <Container>
    <MainSharedLayoutPages pageTitle="Breeds" pageDescription="Gallery of cats by breeds">
        <SC.OptionWrapp>
          <BackPagePanel page="breeds"/>
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
          amountCats={amountCats}
          // changePage={changePage}
          // currentPage={currentPage}
          // lastPage={amountPage()}
        />
    {/*    </Container> */}
    {/*  </> */}
    </MainSharedLayoutPages >
  );
};

export default Breeds;
