import styled from "styled-components";
import { INavLink } from "../../types/types";

export const WrapperText = styled.div<Pick<INavLink, "bgColor" | "img">>` display: flex;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 36px;
  margin-top: ${(p) => p.theme.space[3]}px;
  border-radius: ${(p) => p.theme.radii.s};
  background-color: ${(p) => p.theme.colors.bgSecondary};

  &::before {
    content: "";
    display: block;
    width: 138px;
    height: 198px;
    background-color: ${(p) =>
      p.bgColor
        ? p.theme.colors[`${p.bgColor}`]
        : p.theme.colors.bgAccentSecondary};
    background-image: url(${(p) => (p.img ? `${p.img}` : "none")});
    border: ${(p) => p.theme.borders.l};
    border-color: ${p=>p.theme.colors.bgBorder};
        border-radius: ${p=>p.theme.radii.m};
  }
`;
