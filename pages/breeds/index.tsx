import { FC } from "react";
import Image from "next/image";
import { getCatGallery } from "../../API/catAPI";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { Button } from "../../components/Button/Button";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const param = context.query;
  try {
    const catsData = await getCatGallery(param);
    return {
    props: { catsData, param },
  };
  } catch (error) {
    return { notFound: true };
 }

};



const Breeds: FC = ({ catsData }) => {
  const router = useRouter();
  const param = router.query;

  console.log(catsData);

  const changePage = (value:number) => {
    router.push({
      pathname: "/breeds",
      query: {... param, page: Number(param.page)+value, }
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
      <Button callback={()=>changePage(1)} >+</Button>
      <Button callback={() => changePage(-1)} disabled={btnDisabled}>-</Button>
      <ul>
        {catsData.map(({ url }) => (
          <li key={url}>
            <Image src={url} alt="cat" width={300} height={300} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Breeds;
