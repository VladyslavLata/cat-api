import styled from "styled-components";

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