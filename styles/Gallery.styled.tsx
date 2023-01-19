import styled from "styled-components";
import { Btn } from "../components/Button/Button.styled";
import { Button } from "../components/Button/Button";

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

export const BtnLoadMore = styled(Button)`
margin-left: auto;
margin-right: auto;
`
