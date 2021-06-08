import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${props => props.gap ?? '0.5rem'};
  place-items: center;
  max-witdth: 500px;
  margin: 0 auto;
`;

export default Container;
