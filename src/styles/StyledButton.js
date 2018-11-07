import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 3px;
  border: none;
  background: ${props => props.theme.backgroundButton};
  color: ${props => props.theme.colorButton};
  border-radius: 3px;
  padding: 10px;
  outline: none;
  &:hover {
    background: ${props => props.theme.colorButton};
    color: ${props => props.theme.backgroundButton};
    cursor: pointer;
  }
`;

export default StyledButton;
