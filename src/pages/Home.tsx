import { Container, List, Text, Row, Button, SearchInput } from 'components';
import React from 'react';
import { getAllContries } from 'services';

export const Home = () => {
  const [countries, setCountries] = React.useState([]);
  const [name, setName] = React.useState<string>('');
  const [orderBy, setOrderBy] = React.useState<string>('name');
  const [isAsc, setIsAsc] = React.useState<boolean>(true);

  React.useEffect(() => {
    changeOrderBy(orderBy);
  }, [isAsc, orderBy, name]);

  const populate = (obj: any) => {
    getAllContries(obj).then((res: any) => {
      setCountries(res.Country);
    });
  };
  const changeOrderBy = (orderBy: string) => {
    populate({ orderBy: `${orderBy}_${isAsc ? 'asc' : 'desc'}`, name: name });
  };

  return (
    <Container>
      <SearchInput
        type="search"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search your country here..."
      />
      <Row>
        <Container flex={1}>
          <Text fontWeight="bold">Countries - {countries.length} Items</Text>
        </Container>
        <Container>
          <Row py="20px">
            <Row>
              <Text fontSize="body" pr="5px" fontWeight="bold">
                Sort:{' '}
              </Text>
              {['name', 'population', 'area'].map((e, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    setOrderBy(e);
                  }}
                >
                  <Text
                    fontWeight={e === orderBy ? 'bold' : 'medium'}
                    color={e === orderBy ? 'tertiary' : '#343946'}
                    fontSize="body"
                    pl="3px"
                  >
                    {' '}
                    {e.charAt(0).toUpperCase() + e.slice(1)} |
                  </Text>
                </Button>
              ))}
              <Text fontSize="body" pl="5px" fontWeight="bold">
                Order:
              </Text>
              <Button onClick={() => setIsAsc(!isAsc)}>
                <Text fontSize="body" fontWeight="bold" pl="3px" color={'tertiary'}>
                  {' '}
                  {isAsc ? 'Low to High' : 'High to Low'}
                </Text>
              </Button>
            </Row>
          </Row>
        </Container>
      </Row>
      {/* <Filter filters={filters} onClickRemove={(index) => removeSubRegion(index)} /> */}
      <List items={countries} />
    </Container>
  );
};
