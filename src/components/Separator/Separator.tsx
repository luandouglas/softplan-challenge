import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

type SeparatorProps = SpaceProps & LayoutProps;
export const Separator = styled.div<SeparatorProps>`
  height: 0.5px;
  background-color: rgba(0, 0, 0, 0.1);
  ${space}
  ${layout}
  z-index: 9999;
`;
