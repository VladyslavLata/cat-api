import styled from "styled-components";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const BackButton = styled(ButtonIcon)<{lightTheme: boolean}>`
  background-color: ${p => p.lightTheme ? "" : p.theme.colors.bgDarkThemeAccentTransparent};
`