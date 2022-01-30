import styled from 'styled-components';
import {
  grid,
  gridAutoColumns,
  GridAutoColumnsProps,
  gridAutoFlow,
  GridAutoFlowProps,
  gridColumn,
  GridColumnProps,
  gridGap,
  GridGapProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
} from 'styled-system';

type GridProps = GridGapProps &
  GridTemplateColumnsProps &
  GridColumnProps &
  GridAutoColumnsProps &
  GridGapProps &
  GridAutoFlowProps;

export const Grid = styled.div<GridProps>`
  display: grid;
  ${grid}
  ${gridGap}
  ${gridAutoFlow}
  ${gridColumn}
  ${gridTemplateColumns}
  ${gridAutoColumns}
`;
