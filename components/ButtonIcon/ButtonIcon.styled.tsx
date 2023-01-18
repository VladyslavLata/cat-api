import styled from "styled-components";

export const BtnIcon = styled.button<{ primary: boolean | undefined }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 40px;
  height: 40px;
  color: ${(p) =>p.theme.colors.bgAccentPrimary};
    /* p.primary ? p.theme.colors.bgSecondary : p.the   me.colors.bgAccentPrimary}; */
  background-color: ${(p) =>
    p.primary ? p.theme.colors.bgSecondary : p.theme.colors.bgAccentSecondary};
  border: ${(p) => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.s};
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
        background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover, :focus {
    color: ${p => p.theme.colors.bgSecondary};
    background-color: ${p => p.theme.colors.bgAccentPrimary};
    cursor: pointer;
  }
`;
