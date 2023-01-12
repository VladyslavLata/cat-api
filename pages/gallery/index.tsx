import { FC } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getAllBreeds, getCatGallery, getCategories } from "../../API/catAPI";
import { FavoriteCatNavigation } from "../../components/FavoriteCatNavigation/FavoriteCatNavigation";
import { Container } from "../../components/Container/Container";
import { BackButtonWrapp } from "../../components/BackButtonWrapp/BackButtonWrapp";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { CurrentPage } from "../../components/CurrentPage/CurrentPage";

import { Gallery } from "../../components/Gallery/Gallery";
import { GalleryOptionPanel } from "../../components/GalleryOptionPanel/GalleryOptionPanel";
import { IBreeds, IDataCat, ICateory } from "../../types/types";
import { useStore } from "../../Store/Store";
import Arrow from "../../public/arrow.svg";
import Upload from "../../public/upload.svg";
import * as SC from "../../styles/Gallery.styled";


export const getServerSideProps: GetServerSideProps = async (context) => {
  const param = context.query;
  try {
    const data = await Promise.all([getCatGallery(param), getAllBreeds(), getCategories()]);
    return {
      props: {
        catsData: data[0].catsData,
        amountCats: data[0].amountCats ? data[0].amountCats : "null",
        allBreeds: data[1],
        categoties: data[2],
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
  categoties: ICateory[];
}

const GalleryPage: FC<IProps> = ({catsData, allBreeds, amountCats, categoties}) => {

  // console.log(`catsData ${catsData}`);
 
  console.log(`amountCats ${amountCats}`);
  

  const router = useRouter();
  const params = router.query;
  const currentPage = Number(params.page);

  const chengeSelectsValue = useStore((state) => state.changeSelectsValue);

    const changeParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueParam =
      e.currentTarget.value === "allCategories" ? "" : e.currentTarget.value;

    router.push({
      pathname: "/gallery",
      query: { ...params, page: 0, [e.currentTarget.name]: valueParam },
    });

    chengeSelectsValue(e.currentTarget.name, e.currentTarget.value);
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
          <SC.UploadBtn btn={"main"} onClick={()=>console.log("5u")}><Upload width={16} height={16} fill={"currentColor"} />upload</SC.UploadBtn>
        </SC.Wrapp>
        <GalleryOptionPanel categories={categoties} onChange={changeParam} />
          <Gallery dataCats={catsData} />
        </Container>
 </> )
}

export default GalleryPage;