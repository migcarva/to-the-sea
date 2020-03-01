import styled from 'styled-components';

export default styled.div`
  display: none;

  div {
    font-weight: bold;
    cursor: pointer;
    width: 48%;
    padding: 0 0 0 5vw;
    margin: 0 0 0 2vw;
    height: 5rem;
    position: relative;
    display: grid;
    grid-template: 100% / 100%;
    color: var(--color-text-facts);
    pointer-events: auto;

    &:hover {
      opacity: 0.6;
    }

    > span {
      text-transform: uppercase;
      font-size: 0.6rem;
      letter-spacing: 0.25rem;
      grid-area: 1 / 1 / 1 / 1;
      display: flex;

      &:nth-child(2) {
        opacity: 0;
      }

      > span {
        line-height: 1.75;
        margin: 0 0 0 0.25rem;
      }
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 2rem;
    opacity: 0;
    pointer-events: none;
    color: var(--color-text-facts);
  }

  @media screen and (min-width: 55em) and (min-height: 40em) {
    position: relative;
    grid-area: expander;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    pointer-events: none;
    z-index: 200;

    div {
      font-weight: bold;
      cursor: pointer;
      width: 48%;
      padding: 0 0 0 5vw;
      margin: 0 0 0 2vw;
      height: 5rem;
      position: relative;
      display: grid;
      grid-template: 100% / 100%;
      color: var(--color-text-facts);
      pointer-events: auto;

      &:hover {
        opacity: 0.6;
      }

      > span {
        ext-transform: uppercase;
        font-size: 0.6rem;
        letter-spacing: 0.25rem;
        grid-area: 1 / 1 / 1 / 1;
        display: flex;

        &:nth-child(2) {
          opacity: 0;
        }

        > span {
          line-height: 1.75;
          margin: 0 0 0 0.25rem;
        }
      }
    }

    button {
      position: absolute;
      top: 0;
      right: 0;
      margin: 2rem;
      opacity: 0;
      pointer-events: none;
      color: var(--color-text-facts);
    }
  }
`;
