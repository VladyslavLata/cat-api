import styled from "styled-components";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const OptionBox = styled.div`
  margin: ${(p) => `${p.theme.space[3]}px ${p.theme.space[0]}px `};
  padding: ${(p) => p.theme.space[3]}px;
  background-color: ${(p) => p.theme.colors.bgPrimary};
  border-radius: ${(p) => p.theme.radii.m};

  @media (min-width: 768px) {
    position: relative;
    margin: ${(p) => `${p.theme.space[7]}px ${p.theme.space[0]}px `};
    padding: ${(p) =>
      `${p.theme.space[3]}px ${p.theme.space[7]}px ${p.theme.space[7]}px`};
  }
`;

export const SelectsList = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    row-gap: ${(p) => p.theme.space[3]}px;
    column-gap: ${(p) => p.theme.space[7]}px;
  }
`;
export const SelectItem = styled.li`
  width: 100%;

  @media (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: ${(p) => p.theme.space[3]}px;
    }
  }

  @media (min-width: 768px) {
    width: 304px;
    &:last-child {
      width: 254px;
    }
  }

  @media (min-width: 1440px) {
    width: 290px;
    &:last-child {
      width: 240px;
    }
  }
`;

export const UpdateBtn = styled(ButtonIcon)`
  @media (max-width: 767px) {
    width: 100%;
    margin-top: ${(p) => p.theme.space[3]}px;
  }

  @media (min-width: 768px) {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;
