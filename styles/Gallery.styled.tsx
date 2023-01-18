import styled from "styled-components";
import { Btn } from "../components/Button/Button.styled";
import { ButtonIcon } from "../components/ButtonIcon/ButtonIcon";
import { BtnIcon } from "../components/ButtonIcon/ButtonIcon.styled";

export const UploadBtn = styled(Btn)`
  @media (max-width: 767px) {
    width: 100%;
    margin-top: ${(p) => p.theme.space[3]}px;
  }
`;
export const Wrapp = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

// export const BtnTest = styled(ButtonIcon)`
// & svg {
//   fill: blue;
// }
// `;
