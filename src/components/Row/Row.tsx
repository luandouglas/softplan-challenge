import styled from 'styled-components';
import {
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
  background,
  BackgroundProps,
  boxShadow,
  BoxShadowProps,
  flex,
  FlexProps,
  justifyContent,
  JustifyContentProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

type RowProps = LayoutProps &
  SpaceProps &
  AlignItemsProps &
  BackgroundProps &
  PositionProps &
  BoxShadowProps &
  FlexProps &
  JustifyContentProps &
  AlignSelfProps;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${layout}
  ${space}
  ${alignItems}
  ${background}
  ${position}
  ${boxShadow}
  ${flex}
  ${justifyContent}
  ${alignSelf}
`;
