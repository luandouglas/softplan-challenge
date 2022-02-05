import { Column, Container, Input, Row, Text, Separator, Button } from 'components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { addCountry, countriesSelector, delCountry } from 'redux/CountriesSlice';
import { Country, countrySelector, setCountry } from 'redux/countrySlice';

export const CountryEdit: React.FC = () => {
  const params = useParams();
  const country = useSelector(countrySelector);
  const countries = useSelector(countriesSelector);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [isSync, setIsSync] = React.useState<boolean>(true);

  React.useEffect(() => {
    findCountryInRedux(String(params._id));
  }, []);

  const findCountryInRedux = (_id: string) => {
    countries.map((e: any) => {
      if (e.country._id == Number(_id)) {
        dispatch(setCountry({ ...e.country }));
        setIsSync(false);
      }
    });
  };

  const syncData = () => {
    if (!isSync) {
      const index = countries.findIndex((e: any) => e.country._id === country._id);

      dispatch(delCountry(index));
      dispatch(addCountry(country));
    } else {
      dispatch(addCountry(country));
    }
    navigate('/');
  };

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
            <Input value={country.area} onChange={(e) => dispatch(setCountry({ area: Number(e.target.value) }))} />
          </Column>
          <Column width="50%">
            <Text fontWeight="600">Population</Text>
            <Input
              value={country.population}
              onChange={(e) => dispatch(setCountry({ population: Number(e.target.value) }))}
            />
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
              onChange={(e) =>
                dispatch(setCountry({ location: { ...country.location, latitude: Number(e.target.value) } }))
              }
            />
          </Column>
          <Column width="50%">
            <Text fontWeight="600">Longitude</Text>
            <Input
              value={country.location.longitude}
              onChange={(e) =>
                dispatch(setCountry({ location: { ...country.location, longitude: Number(e.target.value) } }))
              }
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
                                location: { ...element.location, latitude: Number(e.target.value) },
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
                                location: { ...element.location, longitude: Number(e.target.value) },
                              })
                            : element
                        ),
                      })
                    );
                  }}
                />
              </Column>
            </Row>
          ))}
        </Column>
        <Column width="60%">
          <Separator />
        </Column>
        <Text fontWeight="600" pt="10px">
          Distance to other Countries
        </Text>
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
                        distanceToOtherCountries: country.distanceToOtherCountries.map((element, index2) =>
                          index === index2 ? Object.assign({}, element, { name: Number(e.target.value) }) : element
                        ),
                      })
                    );
                  }}
                />
              </Column>
              <Column px="5px" width="50%">
                <Text fontWeight="600">Distance</Text>
                <Input
                  value={e.distanceInKm}
                  onChange={(e) => {
                    dispatch(
                      setCountry({
                        distanceToOtherCountries: country.distanceToOtherCountries.map((element, index2) =>
                          index === index2
                            ? Object.assign({}, element, { distanceInKm: Number(e.target.value) })
                            : element
                        ),
                      })
                    );
                  }}
                />
              </Column>
            </Row>
          ))}
        </Column>
        <Row width="60%" justifyContent="flex-end" pr="10px">
          <Button backgroundColor="tertiary" mt="30px" p="10px" borderRadius="7px" onClick={syncData}>
            <Text fontWeight="600">Salvar</Text>
          </Button>
        </Row>
      </Column>
    </Container>
  );
};
