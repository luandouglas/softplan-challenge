import { Grid } from 'components';
import { ListItem, ListItemProps } from './ListItem';

type ListProps = {
  items: ListItemProps[];
};

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <Grid gridTemplateColumns="repeat(3, 400px)" gridGap="24px">
      {items.map((item, index) => (
        <ListItem {...item} key={index} />
      ))}
    </Grid>
  );
};
