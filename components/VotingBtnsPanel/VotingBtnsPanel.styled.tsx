import styled from "styled-components";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const ListBtns = styled.ul`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  gap: 3px;
  border: ${p => p.theme.borders.l};
  border-color: ${p=>p.theme.colors.bgSecondary};
  border-radius: ${p => p.theme.radii.m};
  background-color: ${p=>p.theme.colors.bgSecondary};
  overflow: hidden;

  @media (min-width: 768px) {
    gap: ${(p) => p.theme.space[1]}px;
  }
`;

export const WrappBtn = styled.li<{ index: number }>`
  background-color: ${(p) => {switch (p.index) {
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

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }

  &:hover,
  :focus {
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


