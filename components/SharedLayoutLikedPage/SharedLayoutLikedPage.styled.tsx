import styled from "styled-components";


export const ContainerWrapp = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 110px);

  @media (min-width: 768px) {
  height: calc(100vh - 130px);
  }
`