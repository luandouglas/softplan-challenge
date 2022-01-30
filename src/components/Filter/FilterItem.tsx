import { Container, Content, Row, Text } from 'components';
import React from 'react';
import { MdClose } from 'react-icons/md';

export type FilterItemsProps = {
  name: string;
};
type ClickRemove = {
  onClickRemove: () => any;
};

export const FilterItem: React.FC<FilterItemsProps & ClickRemove> = ({ name, onClickRemove }) => {
  return (
    <Container>
      <Row>
        <Content width={'150px'} maxHeight="30px">
          <Text fontSize="body" flex={1} color="#70717F" padding="0 5px">
            {name}
          </Text>
          <MdClose onClick={onClickRemove} style={{ cursor: 'pointer' }} color="#70717F" />
        </Content>
      </Row>
    </Container>
  );
};
