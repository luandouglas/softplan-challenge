import styled from 'styled-components';
import {
  AlignItemsProps,
  alignSelf,
  border,
  BorderProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  justifyContent,
  JustifyContentProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
} from 'styled-system';

type ButtonProps = BorderProps &
  FlexProps &
  ColorProps &
  PaddingProps &
  AlignItemsProps &
  MarginProps &
  JustifyContentProps;

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  cursor: pointer;
  ${border}
  ${flex}
  ${color}
  ${padding}
  ${margin}
  ${alignSelf}
  ${justifyContent}
`;
