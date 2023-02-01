import styled from "styled-components";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const ListBtns = styled.ul`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  gap: 3px;

  @media (min-width: 768px) {
    gap: ${(p) => p.theme.space[1]}px;
  }
`;

export const VotingButton = styled(ButtonIcon)`
  width: 60px;
  height: 60px;

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
