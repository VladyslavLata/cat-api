import styled from "styled-components";

export const InfoBreedWrapp = styled.fieldset<{lightTheme:boolean}>`
  position: relative;
  margin: ${(p) => `${p.theme.space[8]}px ${p.theme.space[0]}px ${p.theme.space[0]}px`};
  padding: ${p=>p.theme.space[7]}px;
  border: ${(p) => p.theme.borders.s};
  border-radius: ${(p) => p.theme.radii.m};
  border-color: ${(p) => p.lightTheme ? p.theme.colors.bgAccentSecondary : p.theme.colors.bgDarkThemeAccentTransparent};
  background-color: ${(p) => p.lightTheme ? p.theme.colors.bgSecondary : "transparent"};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
  border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) ;

  @media (min-width: 768px) {
  padding: ${(p) =>
    `${p.theme.space[8]}px ${p.theme.space[10]}px ${p.theme.space[10]}px`};
  }
`;

export const BreedName = styled.legend<{lightTheme:boolean}>`
  padding: ${(p) => `0 ${p.theme.space[10]}px`};
  text-align:center;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.text};  
  background-color: ${(p) => p.lightTheme ? p.theme.colors.bgSecondary : "transparent"};
  border-radius: ${p => p.theme.radii.m};
  color: ${p=> p.lightTheme ? p.theme.colors.textPrimary : p.theme.colors.testAccentSecondary};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
  color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xl};
  }
`;

export const Description = styled.p`
  margin-bottom: ${(p) => p.theme.space[7]}px;
  font-size: ${(p) => p.theme.fontSizes.sm};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.text};
  color: ${(p) => p.theme.colors.textSecondary};
  text-align: center;

    @media (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;

export const InfoBreedList = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: auto;
grid-row-gap: ${p=>p.theme.space[3]}px;

@media (min-width: 768px) {
grid-template-columns: 1fr 1fr ;
grid-column-gap: ${p=>p.theme.space[7]}px;
}
`

export const InfoBreedItem = styled.li`
@media (min-width: 768px) {
  &:first-child {
  grid-area: span 3 / span 1;
}
}

`