import styled from "styled-components";

export const Container = styled.div<{lightTheme:boolean}>`
  padding: ${(p) => p.theme.space[7]}px;
  width: 100%;
  flex-grow: 2;
  margin-right: auto;
  margin-left: auto;
  background-color: ${p => p.lightTheme ? p.theme.colors.bgSecondary : p.theme.colors.bgDarkThemeTransparentSecondary};
  border-radius: ${p => p.theme.radii.m};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 375px) {
    width: 335px;
  }

    @media (min-width: 768px) {
    width: 708px;
  }

  @media (min-width: 1440px) {
    width: 680px;
  }
`;
