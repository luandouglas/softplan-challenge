import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

type ContentProps = LayoutProps;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #eaeaec;
  padding: 4px;
  border-radius: 6px;
  ${layout}
`;
