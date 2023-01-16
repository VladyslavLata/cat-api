import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import queryString from "query-string";
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

  const { changeSelectsValue, changeAllSelectsValue, selectsValue } =
    useStore();
  
  const { changeGallerySelectsValue } = useChangeSelectsValue();

 useEffect(() => {
    changeAllSelectsValue({
     ...selectsValue,
      limit: `${params.limit ? params.limit : "10"}`,
      category_ids: `${params?.category_ids && params?.category_ids !== ""
          ? params.category_ids
          : "allCategories"
        }`,
      mime_types: `${params?.mime_types ? params.mime_types : ""}`,
      order: `${params?.order ? params.order : "RANDOM"}`,
  })
},[])

   useEffect(() => {
    const handleRouteChange = (url: string) => {

      changeGallerySelectsValue(url);   
      // const {query} = queryString.parseUrl(url);
      // console.log(query);
  
      // changeAllSelectsValue({
      //   ...selectsValue,
      //   limit: `${query.limit ? query.limit : "10" }`,
      //   category_ids: `${query?.category_ids && query?.category_ids !== "" ? query.category_ids : "allCategories" }`,
      //   mime_types: `${query?.mime_types ? query.mime_types : ""}`,
      //   order:  `${query?.order ? query.order : "RANDOM" }`,
      // });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [changeAllSelectsValue, changeGallerySelectsValue, router.events, selectsValue]);

 useEffect(() => {
   const handleRouteChangeError = (error: {cancelled: boolean}, url: string) => {
     if (error.cancelled) {
        changeGallerySelectsValue(url);
      }
    };

    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [changeAllSelectsValue, changeGallerySelectsValue, router.events, selectsValue]);

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
        <GalleryOptionPanel categories={categoties} onChange={changeParam} />
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
