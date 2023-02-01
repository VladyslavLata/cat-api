import { FC } from "react";
import Image from "next/image";
import { IDataCat } from "../../types/types";
import { VotingBtnsPanel } from "../VotingBtnsPanel/VotingBtnsPanel";
import { Box } from "../Box/Box";
import * as SC from "./VotingPanel.styled";

interface IProps {
  catData: IDataCat,
}


export const VotingPanel: FC<IProps> = ({ catData: {url, id} }) => {
  return (
    <Box position="relative" marginTop={7}>
    <SC.ImgWrapp>
      <SC.Img src={url} alt={`image cat ID: ${id}`} fill />
      </SC.ImgWrapp>
      <VotingBtnsPanel id={id} />
    </Box>
  )
}