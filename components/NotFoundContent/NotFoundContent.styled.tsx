import styled from "styled-components";
import Image from "next/image";
import { Container } from "../Container/Container";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { Message } from "../Message/Message";

export const ContainerNotFound = styled(Container)`
  min-height: calc(100vh - 40px);

  @media (min-width: 768px) {
    min-height: calc(100vh - 60px);
  }
`;

export const ImgWrapp = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${(p) => p.theme.radii.s};
  overflow: hidden;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    height: 400px;
  }
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ReloadMessage = styled(Message)`
  @media (min-width: 768px) {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const BtnReload = styled(ButtonIcon)`
  margin-top: ${(p) => p.theme.space[7]}px;
  margin-left: auto;
  margin-right: auto;
  min-width: 100%;
  background-color: ${(p) => p.theme.colors.bgAccentPrimary};
  color: ${(p) => p.theme.colors.bgSecondary};

  @media (min-width: 768px) {
    min-width: 170px;
  }

  &:hover,
  :focus {
    background-color: ${(p) => p.theme.colors.bgAccentSecondary};
    color: ${(p) => p.theme.colors.bgAccentPrimary};
  }
`;
