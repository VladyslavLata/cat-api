import styled from "styled-components";
import { INavLink } from "../../types/types";
import  sss from "../../public/breeds.webp";

export const List = styled.ul`
  display: flex;
  gap: ${p=>p.theme.space[5]}px;
`

export const Item = styled.li`
background-color: aqua;
  background-image: url("${sss.src}");
background-repeat: no-repeat;
`

export const Wrapp = styled.div<Pick<INavLink, "bgColor" | "img">>`
  
  ::before {
    content: "";
    display: block;
    width: 138px;
    height: 198px;
    /* background-color: ${(p) =>
      p.bgColor
        ? p.theme.colors[`${p.bgColor}`]
    : p.theme.colors.bgAccentSecondary};
        background-image: url("/public/breeds.webp"); */
    /* background-image: url(${(p) => (p.img ? `${p.img}` : "none")}); */
    border: ${(p) => p.theme.borders.l};
    border-color: ${p=>p.theme.colors.bgBorder};
        border-radius: ${p=>p.theme.radii.m};
  }
` 