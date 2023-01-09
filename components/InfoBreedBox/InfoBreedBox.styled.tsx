import styled from "styled-components";
// import { Param } from "../InfoParamBreed/InfoParamBreed.styled";

export const InfoBreedWrapp = styled.fieldset`
  position: relative;
  margin: ${(p) => `${p.theme.space[8]}px ${p.theme.space[0]}px ${p.theme.space[0]}px`};
  padding: ${p=>p.theme.space[7]}px;
  border: ${(p) => p.theme.borders.s};
  border-radius: ${(p) => p.theme.radii.m};
  border-color: ${(p) => p.theme.colors.bgAccentSecondary};
  background-color: ${(p) => p.theme.colors.bgSecondary};

  @media (min-width: 768px) {
  padding: ${(p) =>
    `${p.theme.space[8]}px ${p.theme.space[10]}px ${p.theme.space[10]}px`};
  }
`;

export const BreedName = styled.legend`
  padding: ${(p) => `0 ${p.theme.space[10]}px`};
  text-align:center;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.text};  
  background-color: ${(p) => p.theme.colors.bgSecondary};
  border-radius: ${p => p.theme.radii.m};
  
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