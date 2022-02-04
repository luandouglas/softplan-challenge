import { Column, Container, Input, Row, Text, Separator, Button } from 'components';
import { MdRemove } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { countrySelector, setCountry } from 'redux/countrySlice';

export const CountryEdit: React.FC = () => {
  const country = useSelector(countrySelector);
  const dispatch = useDispatch();

  return (
    <Container width="80%">
      <Column justifyContent="center" alignItems="center">
        <Column width="60%">
          <Text fontWeight="600">Country</Text>
          <Input value={country.name} onChange={(e) => dispatch(setCountry({ name: e.target.value }))} />
        </Column>
        <Column width="60%">
          <Text fontWeight="600">Capital</Text>
          <Input value={country.capital} onChange={(e) => dispatch(setCountry({ capital: e.target.value }))} />
        </Column>
        <Column width="60%">
          <Text fontWeight="600">Subregion</Text>
          <Input
            value={country.subregion.name}
            onChange={(e) => dispatch(setCountry({ subregion: { ...country.subregion, name: e.target.value } }))}
          />
        </Column>
        <Column width="60%">
          <Text fontWeight="600">Top level Domains</Text>
          {country.topLevelDomains.map((e, index) => (
            <Input
              value={e.name}
              onChange={(e) => {
                dispatch(
                  setCountry({
                    topLevelDomains: country.topLevelDomains.map((element, index2) =>
                      index === index2 ? Object.assign({}, element, { name: e.target.value }) : element
                    ),
                  })
                );
              }}
            />
          ))}
        </Column>
        <Column width="60%">
          <Row alignSelf="flex-end">
            <Button backgroundColor="tertiary" p="10px" borderRadius="7px">
              <Text fontWeight="600">Adicionar</Text>
            </Button>
          </Row>
        </Column>
        <Row width="60%">
          <Column width="50%">
            <Text fontWeight="600">Alpha 2</Text>
            <Input value={country.alpha2Code} onChange={(e) => dispatch(setCountry({ alpha2Code: e.target.value }))} />
          </Column>
          <Column width="50%">
            <Text fontWeight="600">Alpha 3</Text>
            <Input value={country.alpha3Code} onChange={(e) => dispatch(setCountry({ alpha3Code: e.target.value }))} />
          </Column>
        </Row>
        <Row width="60%">
          <Column width="50%">
            <Text fontWeight="600">Area</Text>
            <Input value={country.area} onChange={(e) => dispatch(setCountry({ area: e.target.value }))} />
          </Column>
          <Column width="50%">
            <Text fontWeight="600">Population</Text>
            <Input value={country.population} onChange={(e) => dispatch(setCountry({ population: e.target.value }))} />
          </Column>
        </Row>
        <Column width="60%">
          <Separator />
        </Column>
        <Text fontWeight="600" pt="10px">
          Location
        </Text>
        <Row width="60%">
          <Column width="50%">
            <Text fontWeight="600">Latitude</Text>
            <Input
              value={country.location.latitude}
              onChange={(e) => dispatch(setCountry({ location: { ...country.location, latitude: e.target.value } }))}
            />
          </Column>
          <Column width="50%">
            <Text fontWeight="600">Longitude</Text>
            <Input
              value={country.location.longitude}
              onChange={(e) => dispatch(setCountry({ location: { ...country.location, longitude: e.target.value } }))}
            />
          </Column>
        </Row>
        <Column width="60%">
          <Separator />
        </Column>
        <Text fontWeight="600" pt="10px">
          Borders
        </Text>
        <Column width="60%">
          {country.borders.map((e, index) => (
            <Row justifyContent="space-evenly">
              <Column pl="0" pr="5px" width="33.333333%">
                <Text fontWeight="600">Country</Text>
                <Input
                  value={e.name}
                  onChange={(e) => {
                    dispatch(
                      setCountry({
                        borders: country.borders.map((element, index2) =>
                          index === index2 ? Object.assign({}, element, { name: e.target.value }) : element
                        ),
                      })
                    );
                  }}
                />
              </Column>
              <Column px="5px" width="33.333333%">
                <Text fontWeight="600">Latitude</Text>
                <Input
                  value={e.location.latitude}
                  onChange={(e) => {
                    dispatch(
                      setCountry({
                        borders: country.borders.map((element, index2) =>
                          index === index2
                            ? Object.assign({}, element, {
                                location: { ...element.location, latitude: e.target.value },
                              })
                            : element
                        ),
                      })
                    );
                  }}
                />
              </Column>
              <Column px="5px" width="33.333333%">
                <Text fontWeight="600">Longitude</Text>
                <Input
                  value={e.location.longitude}
                  onChange={(e) => {
                    dispatch(
                      setCountry({
                        borders: country.borders.map((element, index2) =>
                          index === index2
                            ? Object.assign({}, element, {
                                location: { ...element.location, longitude: e.target.value },
                              })
                            : element
                        ),
                      })
                    );
                  }}
                />
              </Column>
              <Column pl="5px" pr="0" mt="25px">
                <Button p="10px" justifyContent="flex-end" backgroundColor="rgba(255,0,0,0.87)" borderRadius="7px">
                  <MdRemove color="#FFF" />
                </Button>
              </Column>
            </Row>
          ))}
        </Column>
        <Column width="60%">
          {country.distanceToOtherCountries.map((e, index) => (
            <Row justifyContent="space-evenly">
              <Column pl="0" pr="5px" width="50%">
                <Text fontWeight="600">Country</Text>
                <Input
                  value={e.countryName}
                  onChange={(e) => {
                    dispatch(
                      setCountry({
                        borders: country.borders.map((element, index2) =>
                          index === index2 ? Object.assign({}, element, { countryName: e.target.value }) : element
                        ),
                      })
                    );
                  }}
                />
              </Column>
              <Column px="5px" width="50%">
                <Text fontWeight="600">Latitude</Text>
                <Input
                  value={e.distanceInKm}
                  onChange={(e) => {
                    dispatch(
                      setCountry({
                        borders: country.borders.map((element, index2) =>
                          index === index2 ? Object.assign({}, element, { distanceInKm: e.target.value }) : element
                        ),
                      })
                    );
                  }}
                />
              </Column>
              <Column pl="5px" pr="0" mt="25px">
                <Button p="10px" justifyContent="flex-end" backgroundColor="rgba(255,0,0,0.87)" borderRadius="7px">
                  <MdRemove color="#FFF" />
                </Button>
              </Column>
            </Row>
          ))}
        </Column>
        <Row width="60%" justifyContent="flex-end" pr="10px">
          <Button backgroundColor="tertiary" mt="30px" p="10px" borderRadius="7px">
            <Text fontWeight="600">Salvar</Text>
          </Button>
        </Row>
      </Column>
    </Container>
  );
};
