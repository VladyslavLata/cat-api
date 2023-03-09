import { FC } from "react";
import * as SC from "./CurrentPage.styled";

interface IProps {
  title: string;
}

export const CurrentPage: FC<IProps> = ({ title }) => {
  return <SC.Text>{title}</SC.Text>;
};
