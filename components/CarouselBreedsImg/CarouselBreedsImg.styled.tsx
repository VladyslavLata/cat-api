import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const CarouselWrapp = styled(Carousel)`
  position: relative;
  z-index: 1;

  & li {
    width:100%;
    height: 360px;
    border-radius: ${p=>p.theme.radii.m};
    overflow: hidden;
  }

  & img {
  object-fit:cover;
  object-position: 50% 20%;
    
}
`;



// export const Thumb = styled.div`
// width: 100px;
// height: 360px;
// border-radius: ${p => p.theme.radii.m}; 
// overflow: hidden; 

// & img {
//   object-fit:cover;
    
// }
// `;

