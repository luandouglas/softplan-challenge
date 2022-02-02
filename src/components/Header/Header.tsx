import { Row, Text, ItemsHeader, Button, StyledLink } from 'components';

export const Header: React.FC = () => {
  return (
    <Row>
      <StyledLink to="/">
        <Text fontWeight="bold" fontSize="bodyExtraLarge" my="10px" pl="10px">
          Softplan
        </Text>
      </StyledLink>
      <ItemsHeader flex={1} flexWrap="wrap" justifyContent="space-evenly">
        <Text borderBottom="1px solid rgba(0,0,0,0.2)">Products</Text>
        <Text>Categories</Text>
        <Text>Contact</Text>
      </ItemsHeader>
      <ItemsHeader>
        <Button border="none">Sign in</Button>
        <Button color="#FFF" border="none" borderRadius="5px" bg="#000000">
          Sign up
        </Button>
      </ItemsHeader>
    </Row>
  );
};
