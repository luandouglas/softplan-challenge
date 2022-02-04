import styled from 'styled-components';
import { flex, FlexProps } from 'styled-system';

type SearchInputProps = FlexProps;

export const SearchInput = styled.input<SearchInputProps>`
  background: #fff;
  color: #525865;
  border-radius: 25px;
  border: 1px solid #d1d1d1;
  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.07);
  width: 100%;
  margin-top: 20px;
  font-size: 1em;
  line-height: 1.45;
  outline: none;
  padding: 0.6em 1.45em 0.7em;
  -webkit-transition: 0.18s ease-out;
  -moz-transition: 0.18s ease-out;
  -o-transition: 0.18s ease-out;
  transition: 0.18s ease-out;

  :hover {
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
  }

  :focus {
    color: #4b515d;
    border: 1px solid #b8b6b6;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px #54dbbf;
  }
  ${flex}
`;
