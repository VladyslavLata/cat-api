import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${(p) => p.theme.space[3]}px;
  background-color: ${(p) => p.theme.colors.bgAccentPrimaryTransparent};
  opacity: 0;
  z-index: 2;
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;