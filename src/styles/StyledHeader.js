import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.backgroundHeader};
  padding: 10px;
`;

export default StyledHeader;
