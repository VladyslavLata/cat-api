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
      : p.theme.colors.bgDarkThemePrimary};
  cursor: pointer;
`;

export const hiddenInput = styled.input`
  /* opacity: 0;
  width: 0;
  height: 0; */
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