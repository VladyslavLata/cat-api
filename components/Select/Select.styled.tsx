import styled from "styled-components";

export const Select = styled.select<{ primary: boolean | undefined, lightTheme:boolean }>`
  padding-left: ${p=>p.theme.space[2]}px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.primary ? (p.lightTheme? p.theme.colors.textPrimary: p.theme.colors.testAccentSecondary) : (p.lightTheme ? p.theme.colors.textSecondary : p.theme.colors.textSecondary )};
  background-color:  ${p => p.primary ? (p.lightTheme ? p.theme.colors.bgSecondary : p.theme.colors.bgDarkThemeSecondary) : (p.lightTheme ? p.theme.colors.bgPrimary : p.theme.colors.bgDarkThemeTransparentSecondary)};
  border: ${p => p.theme.borders.s};
  border-radius: ${p => p.theme.radii.s};
  border-color:  ${p => p.primary ? (p.lightTheme ? p.theme.colors.bgSecondary : p.theme.colors.bgDarkThemeSecondary) : (p.lightTheme ? p.theme.colors.bgPrimary : p.theme.colors.bgDarkThemeTransparentSecondary)};
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, :focus {
    border-color: ${p => p.lightTheme ? p.theme.colors.bgAccentSecondary : p.theme.colors.bgAccentPrimary};
    cursor: pointer;
  }
`

export const Label = styled.label`
padding-left: ${p=>p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.8;
  text-transform: uppercase;
  color: ${p=>p.theme.colors.textSecondary};
`
