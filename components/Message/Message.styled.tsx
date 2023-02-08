import styled from "styled-components";

export const MessageWrapp = styled.div`
  width: 100%;
  margin-top: ${p=>p.theme.space[3]}px;
  padding: ${p => p.theme.space[7]}px;
  border-radius: ${p => p.theme.radii.s};
  background-color: ${p => p.theme.colors.bgPrimary};
  
  @media (min-width: 768px) {
      margin-top: ${p=>p.theme.space[7]}px;
  }
`