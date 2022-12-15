import { FC } from "react";
import Image from "next/image";
import { getCatGallery } from "../../API/catAPI";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const catsData = await getCatGallery();

  if (!catsData) {
    return { notFound: true}
  }

  return {
    props: {catsData}
  }
}

const Breeds: FC = ({ catsData }) => {
  const router = useRouter();
  // console.log(catsData);
  // console.log(`router: ${router}`);
  return (
    <>
      <select onChange={(e)=>console.log(e.currentTarget.value)}>
        <option value="1">1</option>
        <option value="2">3</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    <ul>
    {catsData.map(({ url }) => <li key={url}><Image src={ url} alt="cat" width={300} height={300} /></li> ) }
  </ul></>
    
  )
}



export default Breeds;