import { FC } from "react";
import Image from "next/image";
import { IDataCat } from "../../types/types";

interface IProps {
  dataCats: IDataCat[]
}

export const GelleryItemBreeds: FC<IProps> = ({ dataCats }) => {
  return (<>
    {dataCats.map(({ id, url, breeds }) => <li key={id}><div><p>{breeds[0].name}</p></div><Image src={url} alt={breeds[0].name} width={ 100} height={100} /></li>)}
  </>
  )
}