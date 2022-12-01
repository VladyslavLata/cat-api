import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
  grid,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  TypographyProps,
  ShadowProps,
} from 'styled-system';

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  TypographyProps

export const Box = styled.div<BoxProps>`
  ${color}
  ${layout}
  ${space}
  ${typography}
  ${flexbox}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${grid}
`;