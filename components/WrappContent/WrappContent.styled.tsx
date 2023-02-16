import styled from "styled-components";

export const ContentBox = styled.div<{showContent: boolean}>`
  visibility: ${p => p.showContent ? "visible" : "hidden"};
pointer-events: ${p => p.showContent ? "auto" : "none"};
`