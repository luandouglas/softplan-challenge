import { Row, Text, ItemsHeader, Button, StyledLink } from 'components';

export const Header: React.FC = () => {
  return (
    <Row
      zIndex="9999"
      boxShadow="
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);"
      width="100%"
      top="0"
      left="0"
      height="100px"
      position="fixed"
      background="rgba(255,255,255,1)"
    >
      <StyledLink flex={1} to="/">
        <Text style={{ float: 'left', letterSpacing: -1 }} fontWeight="bold" fontSize="24px" my="10px" pl="25px">
          WORLD COUNTRIES
        </Text>
      </StyledLink>
    </Row>
  );
};
