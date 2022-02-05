import { Button, Column, Container, Image, Row, StyledLink, Text } from 'components';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import * as L from 'leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { countrySelector, setCountry } from 'redux/countrySlice';
import { transformNumber } from 'utils';
import { useParams } from 'react-router';
import { countriesSelector } from 'redux/CountriesSlice';

type Borders = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export const Country: React.FC = () => {
  const params = useParams();
  const countries = useSelector(countriesSelector);
  const dispatch = useDispatch();
  const country = useSelector(countrySelector);
  const { _id } = useParams();
  const LeafIconGreen = L.Icon.extend({
    options: {
      iconUrl: 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF',
    },
  });
  const LeafIconBlue = L.Icon.extend({
    options: {
      shadowUrl: null,
      iconUrl: 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF',
    },
  });

  const greenIcon = new LeafIconGreen();
  const blueIcon = new LeafIconBlue();

  React.useEffect(() => {
    findCountryInRedux(String(params._id));
  }, []);

  const findCountryInRedux = (_id: string) => {
    countries.map((e: any) => {
      if (e.country._id == Number(_id)) {
        dispatch(setCountry({ ...e.country }));
      }
    });
  };
  const getDistanceToOtherCountry = (border: Borders) => {
    return (
      `${country.distanceToOtherCountries.find((e) => e.countryName === border.name)?.distanceInKm.toFixed(2)} km` || 0
    );
  };
  return (
    <Container pt="20px" width="80%">
      <Row>
        <Column flex={1}>
          <Row>
            <Column flex={1}>
              <Row>
                <Text fontSize="displayExtraLarge" fontWeight="bold" pr="10px">
                  {country.name}
                </Text>
                <Image
                  width={30}
                  height={30}
                  borderRadius={23}
                  src={`https://flagcdn.com/w320/${country.alpha2Code.toLowerCase()}.png`}
                />
              </Row>
              <Text pl="10px" fontSize="bodyExtraLarge">
                {country.capital}
              </Text>
            </Column>
            <Column>
              <StyledLink to={`/country/${_id}/edit`}>
                <Button backgroundColor="tertiary" px="20px" py="10px" borderRadius="7px">
                  <Text fontWeight="bold">Edit</Text>
                </Button>
              </StyledLink>
            </Column>
          </Row>
          <Column mt="10px">
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
                Top level domains
              </Text>
              <Row>
                {country.topLevelDomains.map((e) => (
                  <Text fontSize="bodyLarge" color="#808080" p="10px">
                    {e.name}
                  </Text>
                ))}
              </Row>
            </Column>
          </Column>
        </Column>
      </Row>
      <MapContainer
        bounds={country.borders.map((e) => [e.location.latitude, e.location.longitude])}
        // center={{ lat: country.location.latitude, lng: country.location.longitude }}
        zoom={4}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={{ lat: country.location.latitude, lng: country.location.longitude }} icon={greenIcon}>
          <Popup>
            <Text fontSize="bodyLarge" fontWeight="bold">
              {country.name}
            </Text>{' '}
            Capital: {country.capital}
          </Popup>
        </Marker>
        {country.borders.map((e) => (
          <Marker position={{ lat: e.location.latitude, lng: e.location.longitude }} icon={blueIcon}>
            <Popup>
              <Text fontSize="bodyLarge" fontWeight="bold">
                {e.name}
              </Text>
              Distance: {getDistanceToOtherCountry(e)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Container>
  );
};
