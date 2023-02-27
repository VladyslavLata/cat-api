import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`
display: flex;
justify-content: space-between;


@media (min-width: 768px) {
  padding: ${p => `0 ${p.theme.space[16]}px` };
}
`

export const LogoLink = styled(Link)<{showlink: string }>`
visibility: ${p=>p.showlink === "true"  ? "visible" : "hidden" };
`
