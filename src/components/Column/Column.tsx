import styled from 'styled-components';
import {
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  justifyContent,
  JustifyContentProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

type ColumnProps = LayoutProps &
  SpaceProps &
  ColorProps &
  BorderRadiusProps &
  BorderProps &
  FlexProps &
  AlignItemsProps &
  AlignSelfProps &
  JustifyContentProps;

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;

  padding: 10px 10px;
  ${layout}
  ${space}
  ${color}
  ${borderRadius}
  ${border}
  ${flex}
  ${alignItems}
  ${alignSelf}
  ${justifyContent}
`;
