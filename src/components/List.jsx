import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem.jsx';
import StyledList from '../styles/StyledList';

const List = ({ list }) => (
  <StyledList>
    {list.map(item => <ListItem key={item.id} item={item} />)}
  </StyledList>
);

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default List;
