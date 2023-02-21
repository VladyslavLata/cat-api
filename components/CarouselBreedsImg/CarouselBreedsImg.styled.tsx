import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const CarouselWrapp = styled(Carousel)`
  position: relative;
  z-index: 1;
  margin-top: ${p=>p.theme.space[7]}px;

  & li {
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
  }

  & img {
    object-fit: cover;
    object-position: 50% 20%;
  }
`;
