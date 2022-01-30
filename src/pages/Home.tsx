import { Container, List, Input, Filter, Text, Row, Button, FilterItemsProps } from 'components';
import React from 'react';
import { MdGridView, MdSplitscreen } from 'react-icons/md';

export const Home = () => {
  const [filters, setFilters] = React.useState<Array<FilterItemsProps>>([
    {
      name: 'Southern Asia',
    },
    {
      name: 'Northern Europe',
    },
    {
      name: 'Southern Europe',
    },
    {
      name: 'Northern Africa',
    },
    {
      name: 'Polynesia',
    },
    {
      name: 'Middle Africa',
    },
    {
      name: 'Caribbean',
    },
    {
      name: 'South America',
    },
    {
      name: 'Western Asia',
    },
    {
      name: 'Australia and New Zealand',
    },
    {
      name: 'Western Europe',
    },
    {
      name: 'Eastern Europe',
    },
    {
      name: 'Central America',
    },
    {
      name: 'Western Africa',
    },
    {
      name: 'Northern America',
    },
    {
      name: 'Southern Africa',
    },
    {
      name: 'Eastern Africa',
    },
    {
      name: 'South-Eastern Asia',
    },
    {
      name: 'Eastern Asia',
    },
    {
      name: 'Melanesia',
    },
    {
      name: 'Micronesia',
    },
    {
      name: 'Central Asia',
    },
  ]);
  const [sortBy, setSortBy] = React.useState<string>('Alphabetic');
  const [gridView, setGridView] = React.useState<string>('gridView');

  const removeSubRegion = (index: number) => {
    setFilters(filters.filter((e, i) => i !== index));
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
                color={gridView === 'gridView' ? 'tertiary' : '#343946'}
              />
              <MdSplitscreen
                onClick={() => setGridView('splitScreen')}
                size="16px"
                style={{ cursor: 'pointer' }}
                color={gridView === 'splitScreen' ? 'tertiary' : '#343946'}
              />
            </Row>
            <Row>
              <Text fontSize="body" pr="5px" fontWeight="bold">
                Sort:{' '}
              </Text>
              {['Alphabetic', 'Population', 'Area'].map((e) => (
                <Button onClick={() => setSortBy(e)}>
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
      <List
        items={[
          {
            _id: '661',
            name: 'Brazil',
            capital: 'Brasília',
            nativeName: 'Brasil',
            topLevelDomains: [
              {
                name: '.br',
              },
            ],
          },
          {
            _id: '661',
            name: 'Brazil',
            capital: 'Brasília',
            nativeName: 'Brasil',
            topLevelDomains: [
              {
                name: '.br',
              },
            ],
          },
          {
            _id: '661',
            name: 'Brazil',
            capital: 'Brasília',
            nativeName: 'Brasil',
            topLevelDomains: [
              {
                name: '.br',
              },
            ],
          },
          {
            _id: '661',
            name: 'Brazil',
            capital: 'Brasília',
            nativeName: 'Brasil',
            topLevelDomains: [
              {
                name: '.br',
              },
            ],
          },
        ]}
      />
    </Container>
  );
};
