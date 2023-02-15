import styled from "styled-components";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const MobileMenu = styled.div<{ displaying: boolean }>`
position: absolute;
top: 0;
left: 0;
width: 100px;
height: 100px;
transform: translateX(${p=>p.displaying ? 0 : "-101%" });
padding: ${p=>p.theme.space[7]}px;
background-color: red;
/* visibility: ${p=>p.displaying ? "visible" : "hidden"}; */
pointer-events: visible;
visibility: visible;
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

@media (min-width: 768px) {
  padding: ${p=>p.theme.space[9]}px;
}
`

// export const BtnWrapp = styled.div`
//     width: 60px;
//   height: 60px;
//   /* margin-left: auto; */
//   color: ${p=>p.theme.colors.bgAccentPrimary};
//   background-color: ${p => p.theme.colors.bgSecondary};
//   border-radius: ${p => p.theme.radii.m};
  
//   /* & :hover, :focus {
//     color: ${p => p.theme.colors.bgSecondary};
//     background-color: ${p=>p.theme.colors.bgAccentPrimary};
//   } */
// `

export const CloseBtn = styled(ButtonIcon)`
  width: 60px;
  height: 60px;
  /* margin-left: auto; */
  background-color: ${p => p.theme.colors.bgSecondary};
  border-radius: ${p => p.theme.radii.m};
 
;

  
  /* & svg {
    visibility: visible;
  } */
`