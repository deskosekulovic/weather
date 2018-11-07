import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from '../styles/StyledHeader';
import Errors from './Errors.jsx';
import ButtonsInput from './ButtonsInput.jsx';

const Header = props => (
  <StyledHeader>
    <ButtonsInput {...props} />
    {props.error && <Errors message={props.message} />}
  </StyledHeader>
);

Header.propTypes = {
  error: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

export default Header;
