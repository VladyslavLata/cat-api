import styled from "styled-components";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Wrapp = styled.div`
  display: flex;

  @media (max-width: 1439px) {
    justify-content: space-between;
  }
  
  @media (min-width: 1440px) {
    display: block;
  }
`

export const BtnShowMobileMenu = styled(ButtonIcon)`
width: 60px;
height: 60px;
border-radius: ${p => p.theme.radii.m};

 @media (min-width: 1440px) {
    display: none;
  }
`

export const NavWrapp = styled.ul`
  display: flex;
  justify-content: end;
  gap: ${(p) => p.theme.space[3]}px;
  margin-bottom: ${(p) => p.theme.space[3]}px;
`;

export const NavItem = styled.li<{pathName:string, linkName:string, lightTheme: boolean}>`
  width: 60px;
  height: 60px;
  color: ${(p) => p.pathName === p.linkName ? p.theme.colors.bgSecondary :p.theme.colors.bgAccentPrimary};
  background-color: ${(p) => p.pathName === p.linkName ? p.theme.colors.bgAccentPrimary : (p.lightTheme ? p.theme.colors.bgSecondary: p.theme.colors.bgDarkThemeTransparentSecondary)};
  border-radius: ${(p) => p.theme.radii.m};
  transition:  background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, :focus-within { 
    background-color: ${p => p.pathName === p.linkName ? "" : p.theme.colors.bgAccentSecondary};
  }
`;
