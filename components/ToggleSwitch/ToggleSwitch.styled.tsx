import styled from "styled-components";
import Sun from "../../public/sun.svg";
import Moon from "../../public/moon.svg";

export const Switch = styled.label<{ lightTheme: boolean }>`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  border-radius: 24px;
  background-color: ${(p) =>
    p.lightTheme
      ? p.theme.colors.bgAccentSecondary
    : p.theme.colors.bgDarkThemeTransparent};
  transition: background-color cubic-bezier(0.4, 0 , 0.2, 1) 300ms;
  cursor: pointer;

  &:focus-within {  
    outline: ${p => p.lightTheme ? `2px solid #000` : `2px solid #fff` } }
    transition: outline 300ms cubic-bezier(0.4, 0 , 0.2, 1);
`;

export const hiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  &::before {
    position: absolute;
    content: "";
    right: 4px;
    bottom: 4px;
    height: 16px;
    width: 16px;
    background-color: ${p=>p.theme.colors.bgAccentPrimary};
    border-radius: ${(p) => p.theme.radii.round};
    transition: transform 200ms linear;

    ${hiddenInput}:checked + & {
      transform: translateX(-20px);
    }
  }
`

export const IconsWrapp = styled.div<{ lightTheme: boolean}>`
  position: absolute;
  top: 0;
  left: -30px;
  width: 24px;
  height: 24px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.lightTheme ? p.theme.colors.bgSecondary : p.theme.colors.bgDarkThemeTransparent};
  overflow: hidden ;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const IconSun = styled(Sun)<{ lightTheme: boolean}>`
  position: absolute;
  top: 50%;
  left:50%;
  transform: ${p=>p.lightTheme ? "translate(-50%, -50%)" : "translate(-50%, -200%)"}; 
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.bgAccentPrimary};
  transition: transform 300ms linear;
`
export const IconMoon = styled(Moon)<{ lightTheme: boolean}>`
  position: absolute;
  top: 50%;
  left:50%;
  transform: ${p=>p.lightTheme ? "translate(-50%, 100%)" : "translate(-50%, -50%)"};
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.bgAccentPrimary};
  transition: transform 300ms linear;
`