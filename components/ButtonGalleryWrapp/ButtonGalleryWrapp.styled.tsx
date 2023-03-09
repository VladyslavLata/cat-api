import styled from "styled-components";

export const Wrapp = styled.div`
  display: flex;
  justify-content: center;
  gap: ${(p) => p.theme.space[4]}px;
  margin-top: ${(p) => p.theme.space[7]}px;

  @media screen and (min-width: 768px) {
    gap: ${(p) => p.theme.space[10]}px;
  }
`;
