import styled from 'styled-components';
import { borderRadius, BorderRadiusProps, size, SizeProps } from 'styled-system';

type ImageProps = SizeProps & BorderRadiusProps;

export const Image = styled.img<ImageProps>`
  margin-top: 10px;
  align-self: center;
  float: left;
  object-fit: cover;
  object-position: bottom;
  ${size}
  ${borderRadius}
`;
