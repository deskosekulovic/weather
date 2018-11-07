import styled from 'styled-components';

const StyledInput = styled.input`
  background: ${props => props.theme.backgroundButtonsInput};
  border: none;
  font-size: 25px;
  padding: 10px;
  outline: none;
  @media (max-width: 800px) {
    width: 60%;
  }
`;

export default StyledInput;
