import styled from "styled-components";

export const messageWrapp = styled.div<{ upload: boolean }>`
display: flex;
text-align: center;
gap: ${p=>p.theme.space[2]}px;
margin-top: ${p=>p.theme.space[7]}px;
padding: ${p=> `${p.theme.space[6]}px ${p.theme.space[3]}px`};
color: ${p => p.upload ? p.theme.colors.bgGreen : p.theme.colors.bgAccentPrimary};
background-color: ${p => p.theme.colors.bgSecondary};
border-radius: ${p=>p.theme.radii.s};

@media (min-width: 768px) {
  padding: ${p => `${p.theme.space[6]}px ${p.theme.space[7]}px`};
  gap: ${p=>p.theme.space[3]}px;
}
`
  
