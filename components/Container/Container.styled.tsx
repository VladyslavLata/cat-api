import styled from "styled-components";
import bgHome from "../../public/homeBgImg.png";

export const Container = styled.div`
position: relative;
padding: ${p=>p.theme.space[9]}px;
display: flex;
margin-right: auto;
margin-left: auto;
background-image: url(${bgHome.src});
background-repeat: no-repeat;
background-position: top  right ;




@media screen and (min-width:1440px)  {
    width: 1440px;
  }
`