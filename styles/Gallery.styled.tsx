import styled from "styled-components";
import { Btn } from "../components/Button/Button.styled";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container/Container";
import { FavoriteCatNavigation } from "../components/FavoriteCatNavigation/FavoriteCatNavigation";

export const GalleryFavoriteCatNavigation = styled(FavoriteCatNavigation)<{visibleModal: boolean}>`
  /* visibility: ${p => p.visibleModal ? "hidden" : "visible"}; */
`

export const GalleryContainer = styled(Container)<{visibleModal: boolean}>`
  /* visibility: ${p => p.visibleModal ? "hidden" : "visible"}; */
`

export const UploadBtn = styled(Btn)<{lightTheme: boolean}>`
background-color: ${p => p.lightTheme ? "" : p.theme.colors.bgDarkThemeAccentTransparent};

  @media (max-width: 767px) {
    width: 100%;
    margin-top: ${(p) => p.theme.space[3]}px;
  }
`;
export const Wrapp = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BtnLoadMore = styled(Button) <{ lightTheme: boolean }>`
background-color: ${p => p.lightTheme ? "" : p.theme.colors.bgDarkThemeAccentTransparent};
margin-left: auto;
margin-right: auto;
`
