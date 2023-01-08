import styled from "styled-components";
import Link from "next/link";

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: ${p=>p.theme.radii.m};
`;
