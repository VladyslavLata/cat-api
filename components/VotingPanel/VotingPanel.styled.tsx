import styled from "styled-components";
import Image from "next/image";

export const ImgWrapp = styled.div`
  position: relative;
  width: 100%;
  height: 170px;
  border-radius: ${(p) => p.theme.radii.m};
  overflow: hidden;

  @media (min-width: 768px) {
    height: 375px;
  }

  @media (min-width: 1440px) {
    height: 360px;
  }
`;

export const Img = styled(Image)`
  object-fit: cover;
  object-position: 50% 20%;
`;
