import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`

@media (min-width: 768px) {
  padding-left: ${p => `${p.theme.space[16]}px` };
}

`

export const LogoLink = styled(Link)`


`