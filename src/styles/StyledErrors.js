import styled, { keyframes } from 'styled-components';

const tranzition = keyframes`
	from {
    opacity: 0;
	}
	to {
    opacity: 1;
	}
`;

const StyledErrors = styled.div`
  justify-content: center;
  background: #dde1e6;
  padding: 16px;
  margin-left: 5px;
  color: red;
  font-weight: bold;
  border-radius: 3px;
  animation: ${tranzition} 0.5s linear;
`;

export default StyledErrors;
