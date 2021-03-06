import styled from 'styled-components';
import {
  alignItems,
  AlignItemsProps,
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  layout,
  LayoutProps,
  size,
  SizeProps,
  space,
  SpaceProps,
} from 'styled-system';

type ContainerProps = FlexProps &
  SizeProps &
  BorderRadiusProps &
  BorderProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  AlignItemsProps;

export const Container = styled.div<ContainerProps>`
  ${flex}
  ${size}
  ${border}
  ${borderRadius}
  ${color}
  ${space}
  ${layout}
  ${alignItems}
`;
