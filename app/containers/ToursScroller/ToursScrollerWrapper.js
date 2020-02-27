import styled from 'styled-components';

export default styled.div`
  @media screen and (min-width: 55em) and (min-height: 40em) {
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-columns: 45% 55%;
    grid-template-rows: 6rem calc(30% - 2rem) calc(44% - 2rem) calc(26% - 2rem);
    grid-template-areas:
      'header expander'
      'sections-index expander'
      '... expander'
      'sections-nav expander';
  }
`;
