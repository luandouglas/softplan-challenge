import { Card, CardDetail, CardImage, Column, Image, Row, Text, CardActions, StyledLink, Button } from 'components';
import { FaChevronDown } from 'react-icons/fa';
import React from 'react';
import { useDispatch } from 'react-redux';
import { resetCountry, setCountry } from 'redux/countrySlice';
import { getCountryDetail } from 'services';
import { useNavigate } from 'react-router-dom';
import { alignSelf } from 'styled-system';

export type ListItemProps = {
  _id: string;
  name: string;
  capital: string;
  nativeName: string;
  alpha2Code: string;
  topLevelDomains: { name: string }[];
};
export const ListItem: React.FC<ListItemProps> = ({ _id, name, capital, topLevelDomains, alpha2Code }) => {
  const [isShowDetail, setIsShowDetail] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShowDetail = (_id: string) => {
    dispatch(resetCountry());
    getCountryDetail(_id).then((resp: any) => {
      dispatch(setCountry(resp.Country[0]));
      navigate(`country/${_id}`);
    });
  };
  return (
    <Card onMouseEnter={() => setIsShowDetail(true)} onMouseLeave={() => setIsShowDetail(false)}>
      <CardImage flex={1} src={`https://flagcdn.com/w320/${alpha2Code.toLowerCase()}.png`} />

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
            src={`https://flagcdn.com/w320/${alpha2Code.toLowerCase()}.png`}
          />
        </Row>
        {isShowDetail && (
          <StyledLink to="#" onClick={() => handleShowDetail(_id)}>
            <CardActions>
              <Text color="primary" fontWeight="bold" fontSize="bodyLarge">
                See more
              </Text>
              <FaChevronDown style={{ paddingLeft: 5 }} />
            </CardActions>
          </StyledLink>
        )}
      </CardDetail>
    </Card>
  );
};
