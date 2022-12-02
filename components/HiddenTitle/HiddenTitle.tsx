import { FC } from "react";
import * as SC from "./HiddenTitle.styled";

interface IProps {
  tag?: string,
  title: string,
}

export const HiddenTitle: FC<IProps> = ({ tag, title }) => {
  const Tag = tag as keyof JSX.IntrinsicElements || "h1";
  return <SC.Title as={Tag}>{title}</SC.Title>
} 