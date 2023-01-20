import { FC, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
// import queryString from "query-string";

import { getCatGallery, getCategories } from "../../API/catAPI";
import { FavoriteCatNavigation } from "../../components/FavoriteCatNavigation/FavoriteCatNavigation";
import { Container } from "../../components/Container/Container";
import { BackButtonWrapp } from "../../components/BackButtonWrapp/BackButtonWrapp";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { Button } from "../../components/Button/Button";
import { CurrentPage } from "../../components/CurrentPage/CurrentPage";
import { ButtonsChangePages } from "../../components/ButtonsChangePages/ButtonsChangePages";
import { Gallery } from "../../components/Gallery/Gallery";
import { GalleryOptionPanel } from "../../components/GalleryOptionPanel/GalleryOptionPanel";
import { IDataCat, ICateory } from "../../types/types";
import { useStore } from "../../Store/Store";
import { useUbdateStateSelectsValue } from "../../hooks/useUbdateStateSelectsValue";
import { useChangeSelectsValue } from "../../hooks/useChangeSelectsValue";
import { dataNavLinks } from "../../constants/dataNavLinks";
import Arrow from "../../public/arrow.svg";
import Upload from "../../public/upload.svg";
import * as SC from "../../styles/Gallery.styled";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const param = context.query;
  try {
    const data = await Promise.all([getCatGallery(param), getCategories()]);
    return {
      props: {
        catsData: data[0].catsData,
        amountCats: data[0].amountCats ? data[0].amountCats : null,
        categoties: data[1],
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

interface IProps {
  catsData: IDataCat[];
  amountCats: string;
  categoties: ICateory[];
}

const GalleryPage: FC<IProps> = ({ catsData, amountCats, categoties }) => {
  // console.log(`catsData ${catsData}`);

  // console.log(`amountCats ${amountCats}`);

  const router = useRouter();
  const params = router.query;
  const currentPage = Number(params.page);


  console.log(catsData);
  // const {selectsValue} = useStore();


  const { changeGallerySelectsValue } = useChangeSelectsValue();

  // const firstChangeSelectsState = useRef(changeGallerySelectsValue);
  // const stringPath = useRef(router.asPath);

  useUbdateStateSelectsValue(changeGallerySelectsValue);

  const changeParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueParam =
      e.currentTarget.value === "allCategories" ? "" : e.currentTarget.value;

    router.push({
      pathname: "/gallery",
      query: { ...params, page: 0, [e.currentTarget.name]: valueParam },
    });

    // changeSelectsValue(e.currentTarget.name, e.currentTarget.value);
  };

  const changePage = (value: number) => {
    router.push({
      pathname: "/gallery",
      query: { ...params, page: currentPage + value },
    });
  };

  const amountPage = () => {
    return Number(amountCats) / Number(params.limit) <= currentPage + 1;
  };

  //   const disabledRefreshBtn = () => {
  //   return catsData.length >= Number(selectsValue.limit)
  // }

  const resetSelects = () => {
    // if (startedURL.current === router.asPath) {
    //   router.replace(dataNavLinks[2].path);
    // } else {
    //   router.push(dataNavLinks[2].path);
    // }

    router.push(dataNavLinks[2].path);
  };

  const reloadCats = () => {
    router.replace({
      pathname: router.pathname,
      query: params,
    });
  };

  return (
    <>
      <FavoriteCatNavigation />
      <Container>
        <SC.Wrapp>
          <BackButtonWrapp>
            <ButtonIcon
              svg={Arrow}
              width={20}
              height={20}
              onClick={() => router.back()}
            />
            <CurrentPage title={"gallery"} />
          </BackButtonWrapp>
          <SC.UploadBtn btn={"main"} onClick={() => console.log("5u")}>
            <Upload width={16} height={16} fill={"currentColor"} />
            upload
          </SC.UploadBtn>
        </SC.Wrapp>
        <GalleryOptionPanel
          categories={categoties}
          onChange={changeParam}
          onClickBtn={resetSelects}
        />
        <Gallery dataCats={catsData} />
        {amountCats && (
          <ButtonsChangePages
            changePage={changePage}
            currentPage={currentPage}
            lastPage={amountPage()}
          />
        )}
        {params.order === "RANDOM" &&
          catsData.length >= Number(params.limit) && (
            <SC.BtnLoadMore btn={"main"} onClick={reloadCats}>
              load another cats
            </SC.BtnLoadMore>
          )}
      </Container>
    </>
  );
};

export default GalleryPage;
