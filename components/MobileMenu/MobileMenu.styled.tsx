import styled from "styled-components";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const MobileMenu = styled.div<{ displaying: boolean }>`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
transform: translateX(${p=>p.displaying ? 0 : "-101%" });
padding: ${p=>p.theme.space[7]}px;
background-color: ${p=>p.theme.colors.bgPrimary};
/* background-color: transparent; */
z-index: 5;
pointer-events: visible;
visibility: visible;
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

@media (min-width: 768px) {
  padding: ${p=>p.theme.space[9]}px;
}
`

export const CloseBtn = styled(ButtonIcon)`
  width: 60px;
  height: 60px;
  margin-left: auto;
  background-color: ${p => p.theme.colors.bgSecondary};
  border-radius: ${p => p.theme.radii.m};

`