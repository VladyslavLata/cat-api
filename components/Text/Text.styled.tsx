import styled from "styled-components";
import { IProps } from "./Text";

export const Text = styled.p<Pick<IProps, "center"|"marginTheme" | "fs" | "fw" | "lh" | "color">>`
  margin: ${(p) =>
    p.marginTheme
      ? `${p.theme.space[p.marginTheme[0]]}px ${
          p.theme.space[p.marginTheme[1]]
        }px ${p.theme.space[p.marginTheme[2]]}px ${
          p.theme.space[p.marginTheme[3]]
        }px`
      : 0};
  font-size: ${(p) =>
    p.fs ? p.theme.fontSizes[`${p.fs}`] : p.theme.fontSizes.m};
  font-weight: ${(p) =>
    p.fw ? p.theme.fontWeights[`${p.fw}`] : p.theme.fontWeights.normal};
  line-height: ${(p) =>
    p.lh ? p.theme.lineHeights[`${p.lh}`] : p.theme.lineHeights.body};
  text-align: ${p=> p.center? p.center : "start"};
    color: ${(p) =>
  p.color ? p.theme.colors[`${p.color}`] : p.theme.colors.textPrimary};
    transition: color cubic-bezier(0.4, 0 , 0.2, 1) 300ms;
`;
