import styled from 'styled-components';
import { border, BorderProps, color, ColorProps, flex, FlexProps } from 'styled-system';

type ButtonProps = BorderProps & FlexProps & ColorProps;

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  cursor: pointer;
  ${border}
  ${flex}
  ${color}
`;
