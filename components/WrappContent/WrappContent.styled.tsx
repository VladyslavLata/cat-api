import styled from "styled-components";

export const ContentBox = styled.div<{ showContent: boolean }>`
visibility: ${p => p.showContent ? "visible" : "hidden"};
pointer-events: ${p => p.showContent ? "auto" : "none"};
height: ${p => p.showContent ? "" : "calc(100vh - 40px)"};
overflow: ${p => p.showContent ? "none" : "hidden"};

@media (min-width: 768px) {
height: ${p => p.showContent ? "" : "calc(100vh - 60px)"};
}
`