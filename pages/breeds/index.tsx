import { FC } from "react";
import { getCatGallery } from "../../API/catAPI";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { Button } from "../../components/Button/Button";
import { Gallery } from "../../components/Gallery/Gallery";
import { GelleryItemBreeds } from "../../components/GelleryItemBreeds/GelleryItemBreeds";
import { IDataCat } from "../../types/types";
import { getAllBreeds } from "../../API/catAPI";
 
export const getServerSideProps: GetServerSideProps = async (context) => {
  const param = context.query;
  try {
    const catsData = await getCatGallery(param);
    return {
      props: { catsData },
    };
  } catch (error) {
    return { notFound: true };
  }
};

interface IProps {
  catsData: IDataCat[],
  allBreeds: any, 
}

const Breeds: FC<IProps> = ({ catsData, allBreeds }) => {
  const router = useRouter();
  const param = router.query;
  console.log(`ddd   ${ allBreeds }`);
  console.log(catsData);

  const changePage = (value: number) => {
    router.push({
      pathname: "/breeds",
      query: { ...param, page: Number(param.page) + value },
    });
  };

  const btnDisabled = param.page === "0" ? true : false;

  return (
    <>
      <select onChange={(e) => console.log(e.currentTarget.value)}>
        <option value="1">1</option>
        <option value="2">3</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
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

