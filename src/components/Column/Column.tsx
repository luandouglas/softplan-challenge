import styled from 'styled-components';
import {
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
  space,
  SpaceProps,
} from 'styled-system';

type ColumnProps = LayoutProps & SpaceProps & ColorProps & BorderRadiusProps & BorderProps & FlexProps;

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  ${layout}
  ${space}
  ${color}
  ${borderRadius}
  ${border}
  ${flex}
`;
