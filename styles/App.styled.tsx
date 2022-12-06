import styled from "styled-components";

export const MainContent = styled.main`
  ::after {
    content: "";
    display: block;
    box-sizing: border-box;
    width: 680px;
    min-height: 840px;
    height: 500px;
    border-radius: ${(p) => p.theme.radii.m};

    background-color: ${(p) => p.theme.colors.bgAccentSecondary};
  }
`;
