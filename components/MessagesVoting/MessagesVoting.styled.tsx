import styled from "styled-components";
import { Text } from "../Text/Text.styled";

export const MessageList = styled.ul`
  margin-top: 44px;

  @media (min-width: 768px) {
    margin-top: 52px;
  }
`;

export const MessageItem = styled.li`
  position: relative;
  padding: ${(p) => p.theme.space[4]}px;
  background-color: ${(p) => p.theme.colors.bgPrimary};
  border-radius: ${(p) => p.theme.radii.s};

  @media (min-width: 768px) {
    display: flex;
    align-items: baseline;
    padding-right: ${(p) => p.theme.space[11]}px;
  }

  &:not(:last-child) {
    margin-bottom: ${(p) => p.theme.space[3]}px;
  }
`;

export const Time = styled(Text)`
  display: inline-block;
  padding: ${(p) => `3px ${p.theme.space[3]}px`};
  background-color: ${(p) => p.theme.colors.bgSecondary};
  border-radius: ${(p) => p.theme.radii.xs};

  @media (min-width: 768px) {
    margin-right: ${(p) => p.theme.space[7]}px;
  }
`;

export const IconWrapp = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  @media (min-width: 768px) {
    top: 50%;
    transform: translateY(-50%);
  }
`;
