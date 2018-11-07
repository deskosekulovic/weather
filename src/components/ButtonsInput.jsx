import React from 'react';
import PropTypes from 'prop-types';
import StyledButtonsInput from '../styles/StyledButtonsInput';
import StyledButton from '../styles/StyledButton';
import StyledInput from '../styles/StyledInput';

const ButtonsInput = ({
  list,
  city,
  deleteListItem,
  handleNameChange,
  handleKeyUp
}) => (
  <StyledButtonsInput>
    {list.map(item => (
      <StyledButton
        key={item.id}
        id={item.id}
        item={item}
        onClick={() => deleteListItem(item.id)}
      >
        {item.name} <span>x</span>
      </StyledButton>
    ))}
    <StyledInput
      type="text"
      autoFocus
      autoComplete="off"
      value={city}
      onChange={handleNameChange}
      onKeyUp={handleKeyUp}
    />
  </StyledButtonsInput>
);

ButtonsInput.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  city: PropTypes.string.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired
};

export default ButtonsInput;
