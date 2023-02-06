import { FC } from "react";
import Image from "next/image";
import { IDataCat } from "../../types/types";
import { VotingControlPanel } from "../VotingControlPanel/VotingControlPanel";
import { Box } from "../Box/Box";
import * as SC from "./VotingPanel.styled";

interface IProps {
  catData: IDataCat,
}


export const VotingPanel: FC<IProps> = ({ catData: {url, id} }) => {
  return (
    <Box position="relative" marginTop={7}>
    <SC.ImgWrapp>
      <SC.Img src={url} alt={`image cat ID: ${id}`} fill priority sizes="(max-width: 375px) 90vw,
        (min-width: 376px) 295px, (min-width: 768px) 670px
              (mai-width: 1440px) 640px" />
      </SC.ImgWrapp>
      <VotingControlPanel id={id} />
    </Box>
  )
}