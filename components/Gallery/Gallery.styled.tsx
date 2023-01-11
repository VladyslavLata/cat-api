import styled from "styled-components";
import { Overlay } from "../Overlay/Overlay.styled";

export const List = styled.ul`
  display: grid;
  max-width: 100%;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 206px;
  grid-auto-flow: dense;

  @media screen and (min-width: 768px) {
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 140px;
  }
`;

export const Item = styled.li`
  position: relative;
  border-radius: ${(p) => p.theme.radii.m};
  overflow: hidden;

  @media screen and (min-width: 768px) {
    &:nth-child(10n + 1),
    &:nth-child(10n + 8) {
      grid-area: span 2 / span 1;
    }

    &:nth-child(10n + 4),
    &:nth-child(10n + 9) {
      grid-area: span 2 / span 2;
    }

    &:focus,
    :hover {
      ${Overlay} {
        opacity: 1;
      }
    }
  }
`;
