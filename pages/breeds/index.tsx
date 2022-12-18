import { FC } from "react";
import Image from "next/image";
import { getCatGallery } from "../../API/catAPI";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps  = async (context) => {

  let paramPage = context?.query?.page

  const catsData = await getCatGallery(paramPage);

  //   const param = context.query;
  // console.log(param);

  if (!catsData) {
    return { notFound: true}
  }

  if (!paramPage) {
    paramPage = "1"
  }

  return {
    props: {catsData, paramPage}
  }
}

const Breeds: FC = ({ catsData,  paramPage}) => {
  const router = useRouter();

console.log(paramPage);
  console.log(catsData);
  // console.log(`router: ${router}`);
  const handleChangePage = () => {
  router.push({
          pathname: '/breeds',
          query: { page: `${Number(paramPage) + 1}` },
        })
}
 
  return (
    <>
      <select onChange={(e)=>console.log(e.currentTarget.value)}>
        <option value="1">1</option>
        <option value="2">3</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button type="button" onClick={()=>handleChangePage()}></button>
    <ul>
    {catsData.map(({ url }) => <li key={url}><Image src={ url} alt="cat" width={300} height={300} /></li> ) }
  </ul></>
    
  )
}



export default Breeds;