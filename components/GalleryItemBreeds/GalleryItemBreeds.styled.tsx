import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

// export const Overlay = styled.div`
//   position: absolute;
//   display: flex;
//   align-items: flex-end;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   padding: ${(p) => p.theme.space[3]}px;
//   background-color: ${(p) => p.theme.colors.bgAccentPrimaryTransparent};
//   /* border-radius: ${(p) => p.theme.radii.m};
//   overflow: hidden; */
//   opacity: 0;
//   z-index: 2;
//   transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
// `;

export const LinkBreedsInfo = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${(p) => p.theme.radii.m};
  overflow: hidden;

`;

export const BreedsName = styled.p`
  width: 100%;
  padding: ${(p) => `${p.theme.space[2]}px ${p.theme.space[3]}px `};
  font-size: ${(p) => p.theme.fontSizes.sm};
  text-align: center;
  color: ${(p) => p.theme.colors.testAccentPrimary};
  background-color: ${(p) => p.theme.colors.bgSecondary};
  border-radius: ${(p) => p.theme.radii.s};

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const Img = styled(Image)`
  object-fit: cover;
  object-position: 50% 20%;
`;
