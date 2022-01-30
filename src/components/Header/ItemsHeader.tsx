import styled from 'styled-components';
import { flex, flexbox, FlexboxProps, FlexProps } from 'styled-system';

type ItemsHeaderProps = FlexProps & FlexboxProps;

export const ItemsHeader = styled.div<ItemsHeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${flex}
  ${flexbox}
`;
