import styled, { keyframes } from 'styled-components';

const tranzition = keyframes`
	from {
    opacity: 0;
	}
	to {
    opacity: 1;
	}
`;

export const StyledListItem = styled.div`
  display: flex;
  flex-basis: 350px;
  background: white;
  color: ${props => props.theme.colorList};
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  animation: ${tranzition} 0.5s linear;
`;

export const Item1 = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 35%;
  flex-flow: column;
  justify-content: center;
`;
export const Data1 = styled.div`
  font-size: 22px;
`;
export const Item2 = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  sup {
    font-size: 10px;
  }
`;
export const Data2 = styled.div`
  font-size: 28px;
`;
export const Item3 = styled.div`
  display: flex;
  flex-basis: 35%;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export default StyledListItem;
