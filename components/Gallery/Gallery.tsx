import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  [x: string]: {
    id: string,
    url: string,
  }[]
}

export const Gallery: FC<IProps> = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, url }) => <li key={id}><Link href={id}><Image src={url} alt="Cat"/></Link></li>)}
    </ul>
  )
}