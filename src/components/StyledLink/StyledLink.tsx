import { LinkProps, Link } from 'react-router-dom';
import styled from 'styled-components';
import { flex, FlexProps } from 'styled-system';

type StyledProps = LinkProps & FlexProps;

const Styled = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  ${flex}
`;

export const StyledLink: React.FC<StyledProps> = (props) => <Styled {...props} />;
