import styled from "styled-components";
import Image from "next/image";
import { Overlay } from "../Overlay/Overlay";

export const OverlayGalleryItem = styled(Overlay)`
  justify-content: center;
  align-items: center;
`
export const Img = styled(Image)`
  object-fit: cover;
  object-position: 50% 20%;
`;