import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

type CardProps = LayoutProps;

export const Card = styled.div<CardProps>`
  display: flex;
  position: relative;
  width: 350px;
  height: 250px;
  border-radius: 20px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07);

  -webkit-transition: 0.18s ease-out;
  -moz-transition: 0.18s ease-out;
  -o-transition: 0.18s ease-out;
  transition: 0.18s ease-out;

  :hover {
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.01);
    transform: scale(1.1);
    transition: 0.18s ease-out;
  }
  ${layout}
`;
