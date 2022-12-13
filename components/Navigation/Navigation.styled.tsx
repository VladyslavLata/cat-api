import styled from "styled-components";
import { INavLink } from "../../types/types";
import Link from "next/link";
import defaultCat from "../../public/breeds.png";
import { Text } from "../Text/Text.styled";

export const List = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    gap: ${(p) => p.theme.space[5]}px;
  }
`;

export const Item = styled.li`
  width: 100%;

   @media (max-width: 767px) {
      :not(:last-child) {
        margin-bottom: ${p=>p.theme.space[7]}px
      }
    }
    
  @media (min-width: 768px) {
    width: 138px;
  }
`;

export const LinkTitle = styled(Text)`
 
  padding: ${(p) => `${p.theme.space[3]}px ${p.theme.space[2]}px`};
  background-color: ${(p) => p.theme.colors.bgSecondary};
  border-radius: ${(p) => p.theme.radii.s};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  box-shadow: ${(p) => p.theme.shadows.boxShadow};
  transition: box-shadow 300ms cubic-bezier(0.215, 0.61, 0.355, 1),
    background-color 300ms cubic-bezier(0.215, 0.61, 0.355, 1);

 

    @media (min-width: 768px){
       margin-top: ${(p) => p.theme.space[3]}px;
    }
`;

export const Wrapp = styled.div<Pick<INavLink, "bgColor" | "img">>`
  width: 100%;

  @media (min-width: 768px) {
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
      box-shadow: ${(p) => p.theme.shadows.boxShadow};
      transition: box-shadow 300ms cubic-bezier(0.215, 0.61, 0.355, 1),
        border-color 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }
`;

export const NavLink = styled(Link)`
  :hover,
  :focus {
    & ${LinkTitle} {
      box-shadow: none;
      background-color: ${(p) => p.theme.colors.bgAccentSecondary};
    }

    & ${Wrapp}::before {
      border-color: ${(p) => p.theme.colors.bgPrimary};
      box-shadow: none;
    }
  }
`;
