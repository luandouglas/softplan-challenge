import { Column, Container, Image, Row, Text } from 'components';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { countrySelector, setCountry } from 'redux/countrySlice';
import { getCountryDetail } from 'services';
import { transformNumber } from 'utils';

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
      <Row alignItems="flex-start">
        <Column flex={1}>
          <Row>
            <Column flex={1}>
              <Text fontSize="displayExtraLarge" fontWeight="bold">
                {country.name}
              </Text>
              <Text pl="10px" fontSize="bodyExtraLarge">
                {country.capital}
              </Text>
            </Column>
          </Row>
          <Column mt="50px">
            <Column>
              <Text fontSize="bodyExtraLarge" fontWeight="bold">
                Área
              </Text>
              <Text fontSize="bodyLarge" color="#808080" p="10px">
                {transformNumber(String(country.area))} Km²
              </Text>
            </Column>
            <Column>
              <Text fontSize="bodyExtraLarge" fontWeight="bold">
                Population
              </Text>
              <Text fontSize="bodyLarge" color="#808080" p="10px">
                {transformNumber(String(country.population))}
              </Text>
            </Column>
            <Column>
              <Text fontSize="bodyExtraLarge" fontWeight="bold">
                Domínio de topo
              </Text>
              <Row>
                {country.topLevelDomains.map((e) => (
                  <Text fontSize="bodyLarge" color="#808080" p="10px">
                    {e.name} {country.topLevelDomains.length > 1 ? '|' : ''}
                  </Text>
                ))}
              </Row>
            </Column>
          </Column>
        </Column>

        <Image
          width={320}
          height={224}
          borderRadius={23}
          src={`https://flagcdn.com/w320/${country.topLevelDomains[0]?.name?.replace('.', '')}.png`}
        />
      </Row>
      <MapContainer center={[country.location.latitude, country.location.longitude]} zoom={8} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[country.location.latitude, country.location.longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};
