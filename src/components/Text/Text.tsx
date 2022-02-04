import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  textStyle,
  TextStyleProps,
  typography,
  TypographyProps,
} from 'styled-system';

type TextProps = TypographyProps & SpaceProps & FlexProps & BorderProps & ColorProps & LayoutProps & TextStyleProps;

export const Text = styled.p<TextProps>`
  font-family: 14px;

  color: #343946;
  ${typography}
  ${space}
  ${flex}
  ${border}
  ${color}
  ${layout}
  ${textStyle}
`;
