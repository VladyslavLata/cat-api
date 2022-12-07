import styled from "styled-components";
import bgHome from "../../public/homeBgImg.png";

export const Container = styled.div`
  padding: ${(p) => p.theme.space[9]}px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 1440px) {
    width: 1440px;
    position: relative;
    display: flex;
    background-image: url(${bgHome.src});
    background-repeat: no-repeat;
    background-position: top right;
  }
`;
