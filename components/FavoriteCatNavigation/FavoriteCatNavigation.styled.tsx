import styled from "styled-components";

export const NavWrapp = styled.ul`
  display: flex;
  justify-content: end;
  gap: ${(p) => p.theme.space[3]}px;
  margin-bottom: ${(p) => p.theme.space[3]}px;
`;

export const NavItem = styled.li<{pathName:string, linkName:string}>`
  width: 60px;
  height: 60px;
  color: ${(p) => p.pathName === p.linkName ? p.theme.colors.bgSecondary :p.theme.colors.bgAccentPrimary};
  background-color: ${(p) => p.pathName === p.linkName ? p.theme.colors.bgAccentPrimary : p.theme.colors.bgSecondary};
  border-radius: ${(p) => p.theme.radii.m};
  transition:  background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, :focus-within { 
    background-color: ${p => p.pathName === p.linkName ? "" : p.theme.colors.bgAccentSecondary};
  }
`;
