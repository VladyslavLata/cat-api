import styled from "styled-components";

export const MessageWrapp = styled.div<{lightTheme:boolean}>`
  width: 100%;
  margin-top: ${p=>p.theme.space[3]}px;
  padding: ${p => p.theme.space[7]}px;
  border-radius: ${p => p.theme.radii.s};
  background-color: ${p => p.lightTheme ? p.theme.colors.bgPrimary : p.theme.colors.bgDarkThemeTransparentSecondary};
  transition:  background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (min-width: 768px) {
      margin-top: ${p=>p.theme.space[7]}px;
  }
`