import { FC } from "react";

interface IProps {
  tag: string,
  title: string,
}

export const HiddenTitle: FC<IProps> = ({ tag, title }) => {
  const Tag = tag as keyof JSX.IntrinsicElements || "h1";
  return <Tag>{title}</Tag>
} 