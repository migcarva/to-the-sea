import styled from 'styled-components';

export default styled.nav`
  display: block;
  grid-area: sections-nav;
  z-index: 5;
  padding: 2rem 4rem 0;
  background: linear-gradient(0deg, #ffffff 90%, rgba(255,255,255,0));

  button {
    border: 2px solid var(--color-nav);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: var(--color-bg-main);

    &:hover {
      border-color: var(--color-nav-hover);
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
