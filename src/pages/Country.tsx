import { Column, Container, Image, Row, Text } from 'components';
import React from 'react';
import { useParams } from 'react-router';

export const Country: React.FC = () => {
  const params = useParams();
  React.useEffect(() => {
    console.log(params);
  });
  return (
    <Container>
      <Row>
        <Text fontSize="bodyExtraLarge" fontWeight="bold">
          Brazil
        </Text>
        <Image width={256} height={256} src={`https://flagcdn.com/w320/br.png`} />
      </Row>
      <Row padding="20px 0">
        <Column>
          <Text fontWeight="bold">Capital</Text>
          <Text padding="10px 5px">Brasilia</Text>
        </Column>
      </Row>
    </Container>
  );
};
