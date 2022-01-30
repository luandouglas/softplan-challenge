import styled from 'styled-components';
import { flex, FlexProps } from 'styled-system';

type CardImageProps = FlexProps;

export const CardImage = styled.img<CardImageProps>`
  width: 350px;
  height: 250px;
  position: relative;
  border-radius: 20px;
  float: left;
  object-fit: cover;
  object-position: bottom;
  overflow: hidden;
  ${flex}
`;
