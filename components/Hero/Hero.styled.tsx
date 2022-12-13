import styled from "styled-components";

export const Section = styled.section`
@media (max-width: 767px){
  padding: ${p=> `${p.theme.space[14]}px ${p.theme.space[0]}px ${p.theme.space[9]}px`}
}

@media (min-width: 768px){
  padding: ${p => `${p.theme.space[14]}px ${p.theme.space[16]}px`}
}
  
`
