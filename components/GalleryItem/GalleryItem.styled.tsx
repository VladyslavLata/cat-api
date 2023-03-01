import styled from "styled-components";
import Image from "next/image";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { Overlay } from "../Overlay/Overlay";

export const OverlayGalleryItem = styled(Overlay)`
  justify-content: center;
  align-items: center;
`

export const ToggleInFavouriteBtn= styled(ButtonIcon)<{lightTheme:boolean}>`
  background-color: ${p => p.lightTheme ? "" : p.theme.colors.bgDarkThemeSecondary};
`

export const Img = styled(Image)`
  object-fit: cover;
  object-position: 50% 20%;
`;

