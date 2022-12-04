import styled from "styled-components";

export const WrapperText = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 36px;
  margin-top: ${(p) => p.theme.space[3]}px;
  border-radius: ${(p) => p.theme.radii.s};
  background-color: ${(p) => p.theme.colors.bgSecondary};

`;
