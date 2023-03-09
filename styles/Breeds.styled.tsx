import styled from "styled-components";

export const OptionWrapp = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const SelectWrapp = styled.div`
  @media (max-width: 767px) {
    margin-top: ${(p) => p.theme.space[3]}px;
  }

  @media (min-width: 768px) {
    margin-left: ${(p) => p.theme.space[3]}px;
    width: 50%;
  }
`;
