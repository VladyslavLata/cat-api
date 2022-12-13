import styled from "styled-components";

export const Container = styled.div`
  padding: ${(p) => p.theme.space[7]}px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 375px) {
    width: 335px;
  }

    @media (min-width: 768px) {
    width: 708px;
  }

  @media (min-width: 1440px) {
    width: 680px;
  }
`;
