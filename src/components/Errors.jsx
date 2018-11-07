import React from 'react';
import PropTypes from 'prop-types';
import StyledErrors from '../styles/StyledErrors';

const Errors = ({ message }) => <StyledErrors>{message}</StyledErrors>;

Errors.propTypes = {
  message: PropTypes.string.isRequired
};

export default Errors;
