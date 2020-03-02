import styled from 'styled-components';

export default styled.header`
  grid-area: header;
  padding: 2rem 3rem 0 2rem;
  display: flex;

  h1 {
    text-transform: lowercase;
    font-size: 1.35rem;
    margin: 0;
  }

  a {
    display: table;
  }
`;
