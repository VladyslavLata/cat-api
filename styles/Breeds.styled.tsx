import styled from "styled-components";
import Arrow from "../public/arrow.svg";

export const OptionWrapp = styled.div`
  margin-bottom: ${(p) => p.theme.space[7]}px;
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

export const RotateArrow = styled(Arrow)`
  width: 16px;
  height: 16px;
  fill: currentColor;
  transform: rotate(180deg);
`