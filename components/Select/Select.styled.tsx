import styled from "styled-components";

export const Select = styled.select<{ primary: boolean | undefined }>`
  padding-left: ${p=>p.theme.space[2]}px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.primary ? p.theme.colors.textPrimary : p.theme.colors.textSecondary};
  background-color:  ${p => p.primary ? p.theme.colors.bgSecondary : p.theme.colors.bgPrimary};
  border: ${p => p.theme.borders.s};
  border-radius: ${p => p.theme.radii.s};
  border-color: ${p => p.primary ? p.theme.colors.bgSecondary : p.theme.colors.bgPrimary};
  transition: border-color 300ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover, :focus {
    border-color: ${p => p.theme.colors.bgAccentSecondary};
    cursor: pointer;
  }

`

