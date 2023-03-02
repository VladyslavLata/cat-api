import styled from "styled-components";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { Container } from "../Container/Container.styled";
import { Navigation } from "../Navigation/Navigation";

export const MobileMenu = styled.div<{ displaying: boolean, lightTheme: boolean }>`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
transform: translateX(${p=>p.displaying ? 0 : "-101%" });
padding: ${p=>p.theme.space[7]}px;
background-color: ${p=> p.lightTheme ? p.theme.colors.bgPrimary : p.theme.colors.bgDarkThemeSecondary};
z-index: 5;
pointer-events: visible;
visibility: visible;
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

@media (min-width: 768px) {
  padding: ${p=>p.theme.space[9]}px;
}
`

export const SwitchTheme = styled(ToggleSwitch)`
  position: absolute;
  top: ${p=>p.theme.space[7]}px;
  left: ${p => p.theme.space[7] + 30}px;

  @media (min-width: 768px) {
  top: ${p=>p.theme.space[9]}px;
  left: ${p => p.theme.space[9] + 30}px;
  }
`

export const CloseBtn = styled(ButtonIcon)<{ lightTheme: boolean }>`
  width: 60px;
  height: 60px;
  margin-left: auto;
  background-color: ${p => p.lightTheme ? p.theme.colors.bgSecondary : p.theme.colors.bgDarkThemeAccentTransparent};
  border-radius: ${p => p.theme.radii.m};
`
export const MobileMenuContainer = styled(Container)`
background-color: transparent;
flex-grow: 0;
`

export const MobileMenuNavigation = styled(Navigation)`
  justify-content: center;
`