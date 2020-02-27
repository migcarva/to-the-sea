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

  nav {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 3000;
    display: grid;
    grid-template-columns: 100%;
    pointer-events: none;
    align-items: start;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      right: 0;
      transition: opacity 0.3s;
      pointer-events: none;
      opacity: 0;
    }
    @media screen and (min-width: 55em) and (min-height: 40em) {
      grid-template-columns: 47% 53%;
    }
  }

  nav > ul {
    padding: 4rem 2rem 0 0;
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    opacity: 1;
    position: relative;
    text-align: right;

    @media screen and (min-width: 55em) and (min-height: 40em) {
      padding: 4rem 4rem 0 0;
    }

    li {
      font-size: 2.25rem;
      margin: 0 0 1.5rem;
      font-weight: bold;
      opacity: 0;

      a {
        color: var(--color-menu-item);

        &:hover {
          color: var(--color-menu-item-hover);
        }
      }
    }
  }

  nav > div {
    position: absolute;
    top: 0;
    right: 0;
    margin: 2.3rem 2rem;
    display: grid;
    grid-template: 100% / 100%;
    pointer-events: auto;
    cursor: pointer;

    @media screen and (min-width: 55em) and (min-height: 40em) {
      right: 53%;
      margin: 2.3rem 4rem 0 0;
    }

    span {
      display: block;
      grid-area: 1 / 1 / 1 / 1;

      &:nth-child(2) {
        opacity: 0;
        color: var(--color-menu-item);
      }
    }
  }
`;
