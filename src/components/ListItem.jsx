import React from 'react';
import PropTypes from 'prop-types';
import myDate from '../utility/Date';
import StyledListItem, {
  Item1,
  Item2,
  Item3,
  Data1,
  Data2
} from '../styles/StyledListItem';

const ListItem = ({ item }) => (
  <StyledListItem>
    <Item1>
      <Data1>
        <strong>{item.name}</strong>
      </Data1>
      <div>{myDate()}</div>
    </Item1>
    <Item2>
      <Data2>
        <strong>
          {Math.round(item.main.temp)}
          <sup>&#x2103;</sup>
        </strong>
      </Data2>
      <div>{item.weather[0].main}</div>
    </Item2>
    <Item3>
      <div>Humidity: {item.main.humidity}%</div>
      <div>Wind: {item.wind.speed}km/h</div>
    </Item3>
  </StyledListItem>
);

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ListItem;
