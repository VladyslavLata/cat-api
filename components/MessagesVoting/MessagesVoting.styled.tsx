import styled from "styled-components";
import { Text } from "../Text/Text.styled";

export const MessageList = styled.ul`
  margin-top: 44px;

  @media (min-width: 768px) {
    margin-top: 52px;
  }
`;

export const MessageItem = styled.li<{lightTheme:boolean}>`
  position: relative;
  padding: ${(p) => p.theme.space[4]}px;
  background-color: ${(p) => p.lightTheme ? p.theme.colors.bgPrimary : p.theme.colors.bgDarkThemeTransparentSecondary};
  border-radius: ${(p) => p.theme.radii.s};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  & span {
    color: ${p=>p.lightTheme? "" : p.theme.colors.testAccentSecondary};
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: baseline;
    padding-right: ${(p) => p.theme.space[11]}px;
  }

  &:not(:last-child) {
    margin-bottom: ${(p) => p.theme.space[3]}px;
  }
`;

export const Time = styled(Text)<{lightTheme:boolean}>`
  display: inline-block;
  padding: ${(p) => `3px ${p.theme.space[3]}px`};
  background-color: ${(p) => p.lightTheme ? p.theme.colors.bgSecondary : p.theme.colors.bgDarkThemeSecondary};
  color: ${p=> p.lightTheme ? "" : p.theme.colors.testAccentSecondary };
  border-radius: ${(p) => p.theme.radii.xs};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    margin-right: ${(p) => p.theme.space[7]}px;
  }
`;


export const IconWrapp = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  @media (min-width: 768px) {
    top: 50%;
    transform: translateY(-50%);
  }
`;
