import { FC, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
// import queryString from "query-string";

import { getCatGallery, getCategories } from "../../API/catAPI";
import { FavoriteCatNavigation } from "../../components/FavoriteCatNavigation/FavoriteCatNavigation";
import { Container } from "../../components/Container/Container";
import { BackButtonWrapp } from "../../components/BackButtonWrapp/BackButtonWrapp";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { CurrentPage } from "../../components/CurrentPage/CurrentPage";
import { ButtonsChangePages } from "../../components/ButtonsChangePages/ButtonsChangePages";
import { Gallery } from "../../components/Gallery/Gallery";
import { GalleryOptionPanel } from "../../components/GalleryOptionPanel/GalleryOptionPanel";
import { IDataCat, ICateory } from "../../types/types";
import { useStore } from "../../Store/Store";
import { useUbdateStateSelectsValue } from "../../hooks/useUbdateStateSelectsValue";
import { useChangeSelectsValue } from "../../hooks/useChangeSelectsValue";
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

  console.log(router);
  // const {selectsValue} = useStore();

  const { changeGallerySelectsValue } = useChangeSelectsValue();

  // const firstChangeSelectsState = useRef(changeGallerySelectsValue);
  // const stringPath = useRef(router.asPath);

  useUbdateStateSelectsValue(changeGallerySelectsValue);

  // useEffect(() => {
  //   firstChangeSelectsState.current(stringPath.current)
  // }, []);

  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     changeGallerySelectsValue(url);
  //   };

  //   const handleRouteChangeError = (
  //     error: { cancelled: boolean },
  //     url: string
  //   ) => {
  //     if (error.cancelled) {
  //       changeGallerySelectsValue(url);
  //     }
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);
  //   router.events.on("routeChangeError", handleRouteChangeError);

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //     router.events.off("routeChangeError", handleRouteChangeError);
  //   };
  // }, [
  //   changeAllSelectsValue,
  //   changeGallerySelectsValue,
  //   router.events,
  //   selectsValue,
  // ]);

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

  const reloadPage = () => {
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
          onClickBtn={reloadPage}
        />
        {/* <SC.BtnTest  svg={Arrow}
              width={20}
              height={20}
              onClick={() => console.log("d")}/> */}
        <Gallery dataCats={catsData} />
        {amountCats && (
          <ButtonsChangePages
            changePage={changePage}
            currentPage={currentPage}
            lastPage={amountPage()}
          />
        )}
      </Container>
    </>
  );
};

export default GalleryPage;
