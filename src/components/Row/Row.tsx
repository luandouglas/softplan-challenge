import styled from 'styled-components';
import { alignItems, AlignItemsProps, layout, LayoutProps, space, SpaceProps } from 'styled-system';

type RowProps = LayoutProps & SpaceProps & AlignItemsProps;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${layout}
  ${space}
  ${alignItems}
`;
