import styled from "styled-components";
import { backgroundColor } from "styled-system";

export const MainContent = styled.main<{currentPage:string}>`
  @media screen and (min-width: 1440px) {
    width: 1380px;
    padding-left: 700px;


    ::after {
      content: "";
      position: relative;
      display: ${p=>p.currentPage === "/" ? "block" : "none" };
      width: 680px;
      min-height: 840px;
      border-radius: ${(p) => p.theme.radii.m};
      background-color: ${(p) => p.theme.colors.bgAccentSecondary};
      z-index: -1;
    }
  }
`;

