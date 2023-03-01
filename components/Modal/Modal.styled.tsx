import styled from "styled-components";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(29, 29, 29, 0.6);
`;

export const ModalBox = styled.div<{lightTheme: boolean}>`
  width: 100%;
  padding: ${(p) => p.theme.space[7]}px;
  background-color: ${(p) => p.lightTheme ? p.theme.colors.bgPrimary : p.theme.colors.bgDarkThemeModal};
  margin-left: auto;
  overflow: auto;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);


  @media (max-width: 767px) {
    height: 100%;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 30px;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
    width: 708px;
    max-height: 1400px;
    border-radius: ${(p) => p.theme.radii.m};
  }

  @media (min-width: 1440px) {
    transform: translateX(calc(-50% + 350px));
    width: 680px;
  }
`;

export const ButtonCloseModal = styled(ButtonIcon)<{lightTheme: boolean}>`
  margin-left: auto;
  background-color: ${p=>p.lightTheme? "" : p.theme.colors.bgDarkThemeTransparentSecondary}
`;
