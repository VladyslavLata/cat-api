import { FC, ReactNode } from "react";
import * as SC from "./Text.styled";

export interface IProps {
  center?:string,
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span",
  marginTheme?: [number, number, number, number],
  fs?: "xs" | "s" | "m" | "l"|  "xl" | "xxl",
  fw?: "normal" | "medium",
  lh?: "body"| "heading"| "text",
  color?: "textPrimary" | "textSecondary" | "testAccentPrimary" | "testAccentSecondary"
  children: ReactNode,
}

export const Text: FC<IProps> = ({tag = "p",center, marginTheme, fs, fw, lh, color, children }) => {
  return (<SC.Text as={tag} center={center} marginTheme={marginTheme} fs={fs} fw={fw} lh={lh} color={color}>{children}</SC.Text>)
} 