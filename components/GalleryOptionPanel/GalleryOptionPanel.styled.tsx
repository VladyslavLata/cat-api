import styled from "styled-components";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const OptionBox = styled.div<{lightTheme:boolean}>`
  margin: ${(p) => `${p.theme.space[3]}px ${p.theme.space[0]}px `};
  padding: ${(p) => p.theme.space[3]}px;
  background-color: ${(p) => p.lightTheme ? p.theme.colors.bgPrimary : p.theme.colors.bgDarkThemeTransparentSecondary};
  border-radius: ${(p) => p.theme.radii.m};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    position: relative;
    margin: ${(p) => `${p.theme.space[7]}px ${p.theme.space[0]}px `};
    padding: ${(p) =>
      `${p.theme.space[3]}px ${p.theme.space[7]}px ${p.theme.space[7]}px`};
  }
`;

export const SelectsList = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    row-gap: ${(p) => p.theme.space[3]}px;
    column-gap: ${(p) => p.theme.space[7]}px;
  }
`;
export const SelectItem = styled.li`
  width: 100%;

  @media (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: ${(p) => p.theme.space[3]}px;
    }
  }

  @media (min-width: 768px) {
    width: 304px;
    &:last-child {
      width: 254px;
    }
  }

  @media (min-width: 1440px) {
    width: 290px;
    &:last-child {
      width: 240px;
    }
  }
`;

export const UpdateBtn = styled(ButtonIcon)<{lightTheme: boolean}>`
background-color: ${p => p.lightTheme ? "" : p.theme.colors.bgDarkThemeAccentTransparent};

  @media (max-width: 767px) {
    width: 100%;
    margin-top: ${(p) => p.theme.space[3]}px;
  }

  @media (min-width: 768px) {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;
