import { Container, FilterItem, FilterItemsProps, Grid } from 'components';
import React from 'react';

type FilterProps = {
  filters: FilterItemsProps[];
  onClickRemove: (index: number) => void;
};

export const Filter: React.FC<FilterProps> = ({ filters, onClickRemove }) => {
  return (
    <Container my="10px">
      <Grid gridGap={10} gridTemplateColumns={'repeat(6, 200px)'}>
        {filters.map((e, index) => (
          <FilterItem onClickRemove={() => onClickRemove(index)} {...e} key={index} />
        ))}
      </Grid>
    </Container>
  );
};
