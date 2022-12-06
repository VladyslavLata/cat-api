import styled from "styled-components";
import { INavLink } from "../../types/types";
import Link from "next/link";
import defaultCat from "../../public/breeds.png";
import { Text } from "../Text/Text.styled";

export const List = styled.ul`
  display: flex;
  gap: ${(p) => p.theme.space[5]}px;
`;

export const Item = styled.li`
width: 138px;
`;

export const LinkTitle = styled(Text)`
margin-top: ${p=>p.theme.space[3]}px;
padding: ${p => `${p.theme.space[3]}px ${p.theme.space[2]}px`};
background-color: ${p => p.theme.colors.bgSecondary};
border-radius: ${p=>p.theme.radii.s};
text-transform: uppercase;
text-align: center;
letter-spacing: 2px;
box-shadow: ${p=>p.theme.shadows.boxShadow};
`


export const Wrapp = styled.div<Pick<INavLink, "bgColor" | "img">>`
width: 138px;

  ::before {
    content: "";
    display: block;
    width: 138px;
    height: 198px;
    background-color: ${(p) =>
      p.bgColor
        ? p.theme.colors[`${p.bgColor}`]
        : p.theme.colors.bgAccentSecondary};
    background-image: url(${(p) => p.img ? `${p.img.src}` : `${defaultCat.src}`});
    background-position: bottom -4px left;
    background-repeat: no-repeat;
    border: ${(p) => p.theme.borders.l};
    border-color: ${(p) => p.theme.colors.bgBorder};
    border-radius: ${(p) => p.theme.radii.m};
    box-shadow: ${p => p.theme.shadows.boxShadow};
  }
`;

export const NavLink = styled(Link)`
:hover, :focus {
   & ${LinkTitle} {
box-shadow: none;
background-color: ${p=>p.theme.colors.bgAccentSecondary};
  }

   & ${Wrapp}::before {
    border-color: ${p=>p.theme.colors.bgPrimary};
box-shadow: none;
   }
}
`


