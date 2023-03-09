import styled from "styled-components";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const ListBtns = styled.ul<{lightTheme: boolean}>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  gap: 3px;
  border: ${(p) => p.theme.borders.m};
  border-color: ${(p) => p.lightTheme? p.theme.colors.bgSecondary : p.theme.colors.bgDarkThemeSecondary}; 
  border-radius: ${(p) => p.theme.radii.m};
  background-color: ${(p) => p.theme.colors.bgSecondary};
  overflow: hidden;
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    gap: ${(p) => p.theme.space[1]}px;
  }
`;

export const WrappBtn = styled.li<{ index: number }>`
  background-color: ${(p) => {
    switch (p.index) {
      case 0:
        return p.theme.colors.bgGreen;
      case 1:
        return p.theme.colors.bgAccentPrimary;
      case 2:
        return p.theme.colors.bgYellow;
    }
  }};
`;

export const VotingButton = styled(ButtonIcon)<{ index: number }>`
  width: 60px;
  height: 60px;
  color: ${(p) => p.theme.colors.bgSecondary};
  background-color: transparent;
  border-radius: ${(p) => p.theme.radii.none};

  border-top-left-radius: ${(p) =>
    p.index === 0 ? p.theme.radii.s : p.theme.radii.none};
  border-bottom-left-radius: ${(p) =>
    p.index === 0 ? p.theme.radii.s : p.theme.radii.none};
  border-top-right-radius: ${(p) =>
    p.index === 2 ? p.theme.radii.s : p.theme.radii.none};
  border-bottom-right-radius: ${(p) =>
    p.index === 2 ? p.theme.radii.s : p.theme.radii.none};

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }

  &:focus, :hover {
    color: ${(p) => {
      switch (p.index) {
        case 0:
          return p.theme.colors.bgGreen;
        case 1:
          return p.theme.colors.bgAccentPrimary;
        case 2:
          return p.theme.colors.bgYellow;
      }
    }};
    background-color: ${(p) => p.theme.colors.bgWhiteTransparent};
  }
`;
