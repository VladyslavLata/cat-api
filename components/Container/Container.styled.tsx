import styled from "styled-components";

export const Container = styled.div`
padding: ${p=>p.theme.space[9]}px;
display: flex;
margin-right: auto;
margin-left: auto;

  ::after {
    content: "";
    display: block;
    flex-grow: 1;
    /* width: 680px; */
    height: 500px;
    border-radius: ${p=>p.theme.radii.m};
    
    background-color: ${p=>p.theme.colors.bgAccentSecondary};
  }

@media screen and (min-width:1440px)  {
    width: 1440px;
  }
`