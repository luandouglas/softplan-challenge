import styled from 'styled-components';
import Rectangle from './Rectangle.svg';

export const CardDetail = styled.div`
  position: absolute;
  width: 350px;
  height: 80px;
  border-radius: 0 0 20px 20px;
  padding: 10px 10px;
  align-self: flex-end;
  background-image: url(${Rectangle});
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.25s ease-in-out;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre-wrap;
  :hover {
    height: 110px;
    transition: 0.25s ease-in-out;
  }
`;
