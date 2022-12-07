import styled from "styled-components";

export const MainContent = styled.main`
  @media screen and (min-width: 1440px) {
    width: 680px;

    ::after {
      content: "";
      position: relative;
      display: block;
      box-sizing: border-box;
      width: 680px;
      min-height: 840px;
      height: 500px;
      border-radius: ${(p) => p.theme.radii.m};
      background-color: ${(p) => p.theme.colors.bgAccentSecondary};
      z-index: -1;
    }
  }
`;
