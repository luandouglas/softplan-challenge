import { Card, CardDetail, CardImage, Column, Image, Row, Text, CardActions } from 'components';
import { FaChevronDown } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

export type ListItemProps = {
  _id: string;
  name: string;
  capital: string;
  nativeName: string;
  topLevelDomains: { name: string }[];
};

export const ListItem: React.FC<ListItemProps> = ({ _id, name, capital, topLevelDomains }) => {
  const [isShowDetail, setIsShowDetail] = React.useState(false);
  return (
    <Card onMouseEnter={() => setIsShowDetail(true)} onMouseLeave={() => setIsShowDetail(false)}>
      <CardImage flex={1} src={`https://flagcdn.com/w320/${topLevelDomains[0].name.replace('.', '')}.png`} />
      <CardDetail>
        <Row p="8px">
          <Column flex={1}>
            <Text color="primary" fontWeight="bold" fontSize="bodyLarge">
              {name}
            </Text>
            <Text color="primary" fontSize="body">
              {capital}
            </Text>
          </Column>
          <Image
            width={43}
            height={43}
            borderRadius="50%"
            src={`https://flagcdn.com/w320/${topLevelDomains[0].name.replace('.', '')}.png`}
          />
        </Row>
        {isShowDetail && (
          <Link to={`/country/${_id}`}>
            <CardActions>
              <Text color="primary" fontWeight="bold" fontSize="bodyLarge">
                See more
              </Text>
              <FaChevronDown style={{ paddingLeft: 5 }} />
            </CardActions>
          </Link>
        )}
      </CardDetail>
    </Card>
  );
};
