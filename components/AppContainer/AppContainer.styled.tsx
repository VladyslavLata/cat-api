import styled from "styled-components";
import bgHome from "../../public/homeBgImg.png";

export const AppContainer = styled.div<{ currentPage: string }>`
  width: 100%;
  padding: ${(p) => p.theme.space[7]}px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 375px) {
    width: 375px;
  }

  @media (min-width: 768px) {
      padding: ${(p) => p.theme.space[9]}px;
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    position: relative;
    background-image: url(${p => p.currentPage === "/" ? bgHome.src : "none"});
    background-repeat: no-repeat;
    background-position: top right;
  }
`;
