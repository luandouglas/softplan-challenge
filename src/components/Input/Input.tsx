import styled from 'styled-components';
import { flex, FlexProps } from 'styled-system';

type InputProps = FlexProps;

export const Input = styled.input<InputProps>`
  background: #fff;
  color: #525865;
  border-radius: 5px;
  border: 1px solid #d1d1d1;
  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.07);
  margin-top: 5px;
  font-size: 1em;
  line-height: 1.45;
  outline: none;
  text-align: left;
  padding: 0.4em 0.7em;
  -webkit-transition: 0.18s ease-out;
  -moz-transition: 0.18s ease-out;
  -o-transition: 0.18s ease-out;
  transition: 0.18s ease-out;

  :focus {
    color: #4b515d;
    border: 1px solid #4b515d;
  }
  ${flex}
`;
