import { Column, Container, Image, Row, Text } from 'components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { countrySelector, setCountry } from 'redux/countrySlice';
import { getCountryDetail } from 'services';

export const Country: React.FC = () => {
  const params: any = useParams();
  const country = useSelector(countrySelector);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getCountryDetail(params._id).then((resp: any) => {
      dispatch(setCountry(resp.Country[0]));
    });
  }, []);
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
          <Text fontWeight="bold">{country.name}</Text>
          <Text padding="10px 5px">Brasilia</Text>
        </Column>
      </Row>
    </Container>
  );
};
