import { Container, List, Input, Filter, Text, Row, Button, FilterItemsProps, ListItemProps } from 'components';
import React from 'react';
import { MdGridView, MdSplitscreen } from 'react-icons/md';
import { getAllContries } from 'services';

export const Home = () => {
  const [filters, setFilters] = React.useState<Array<FilterItemsProps>>([]);
  const [countries, setCountries] = React.useState([]);
  const [sortBy, setSortBy] = React.useState<string>('Alphabetic');
  const [gridView, setGridView] = React.useState<string>('gridView');

  const removeSubRegion = (index: number) => {
    setFilters(filters.filter((e, i) => i !== index));
  };
  React.useEffect(() => {
    populate();
  }, []);
  const populate = () => {
    getAllContries().then((res: any) => {
      console.log(res);
      setCountries(res.Country);
    });
  };

  return (
    <Container>
      <Input type="search" placeholder="Search your country here..." />
      <Row>
        <Container flex={1}>
          <Text fontWeight="bold">Countries - {16172} Items</Text>
        </Container>
        <Container>
          <Row>
            <Row pr="10px">
              <Text fontSize="body" pr="5px" fontWeight="bold">
                View:{' '}
              </Text>
              <MdGridView
                onClick={() => setGridView('gridView')}
                size="16px"
                style={{ cursor: 'pointer' }}
                color={gridView === 'gridView' ? '#54DBBF' : '#343946'}
              />
              <MdSplitscreen
                onClick={() => setGridView('splitScreen')}
                size="16px"
                style={{ cursor: 'pointer' }}
                color={gridView === 'splitScreen' ? '#54DBBF' : '#343946'}
              />
            </Row>
            <Row>
              <Text fontSize="body" pr="5px" fontWeight="bold">
                Sort:{' '}
              </Text>
              {['Alphabetic', 'Population', 'Area'].map((e, index) => (
                <Button key={index} onClick={() => setSortBy(e)}>
                  <Text
                    fontWeight={e === sortBy ? 'bold' : 'medium'}
                    color={e === sortBy ? 'tertiary' : '#343946'}
                    fontSize="body"
                    pl="3px"
                  >
                    {' '}
                    {e} |
                  </Text>
                </Button>
              ))}
              <Text fontSize="body" pl="5px" fontWeight="bold">
                Order:
              </Text>
              <Text fontSize="body" pl="3px">
                {' '}
                Low to High
              </Text>
            </Row>
          </Row>
        </Container>
      </Row>
      <Filter filters={filters} onClickRemove={(index) => removeSubRegion(index)} />
      <List items={countries} />
    </Container>
  );
};
