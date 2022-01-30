import { LinkProps, Link } from 'react-router-dom';
import styled from 'styled-components';

type StyledProps = LinkProps;

const Styled = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const StyledLink: React.FC<StyledProps> = (props) => <Styled {...props} />;
