import styled from "styled-components";
import { InfoBreedItem } from "../InfoBreedBox/InfoBreedBox.styled";

export const Info = styled.p`
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.text};
  color: ${p => p.theme.colors.textSecondary};
`
export const Param = styled.span<{lightTheme:boolean}>`
  display: block;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.lightTheme ? p.theme.colors.textPrimary : p.theme.colors.testAccentSecondary};
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    ${`${InfoBreedItem}:not(:first-child)`} & {
      display: inline-block;
    } 
  }
  
`