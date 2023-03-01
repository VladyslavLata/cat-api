import styled from "styled-components";
import { Button } from "../Button/Button";
import Arrow from "../../public/arrow.svg";

export const Wrapp = styled.div`
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.space[10]}px;
    
  }
`

export const ChangePageBtn = styled(Button)<{lightTheme: boolean}>`
  background-color: ${p => p.lightTheme ? "" : p.theme.colors.bgDarkThemeAccentTransparent};

  &:disabled{
    background-color: ${p => p.lightTheme ? "" : p.theme.colors.bgDarkThemeSecondary};
  }
`

export const RotateArrow = styled(Arrow)`
  width: 16px;
  height: 16px;
  fill: currentColor;
  transform: rotate(180deg);
`