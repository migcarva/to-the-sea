import styled from 'styled-components';

export default styled.section`
  pointer-events: ${props => (props.current ? 'auto' : 'none')};
  grid-area: 1 / 1 / 5 / 4;
  display: grid;
  grid-template-columns: 47% 25% 28%;
  grid-template-rows: 39% 39% 22%;
  grid-template-areas:
    '... slide-image slide-image'
    'slide-content slide-image slide-image'
    '... ... more';

  .content {
    padding: 0 4rem;
    grid-area: slide-content;

    h2 {
      font-size: 10vw;
      text-transform: lowercase;
      margin: 0;
      letter-spacing: -0.35vw;
      position: relative;
      overflow: hidden;

      p {
        line-height: 1.75;
        overflow: hidden;
        position: relative;
        padding: 0 2rem 0 0;
        font-weight: 300;

        span {
          display: block;
        }
      }

      span {
        display: inline-block;
      }
    }
  }

  .img {
    height: 45vh;
    pointer-events: none;

    div {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: 50% 50%;
    }
  }

  .more {
    grid-area: more;
    display: flex;
    align-items: stretch;
    overflow: hidden;

    > div {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;

      &:first-child {
        background-color: var(--color-bg-more-1);
      }
      &:nth-child(2) {
        background-color: var(--color-bg-more-2);
      }
      &:nth-child(3) {
        background-color: var(--color-bg-more-3);
      }
      &:nth-child(4) {
        background-color: var(--color-bg-more-4);
      }
      &:nth-child(5) {
        background-color: var(--color-bg-more-5);
      }

      > span {
        font-weight: bold;
        display: block;
        margin: 0 0 1rem 0;
      }

      > a {
        display: flex;
        cursor: pointer;
        font-weight: 300;

        span {
          margin: 0 0.5rem 0 0;
	        line-height: 1;
        }
      }
    }
  }

  .expander {
    grid-area: 1 / 2 / 4 / 4;
    background: var(--color-bg-facts);
    transform-origin: 0 0;
    left: -2vw;
    position: relative;
    z-index: 100;
  }

  .facts {
    padding: 2rem;
    margin: 0;
    list-style: none;
    background: var(--color-bg-facts);
    color: var(--color-text-facts);

    li {
      margin: 0 0 2.5rem 0;

      &:last-child {
        display: none;

        div {
          max-width: 200px;
          border-radius: 5px;
          display: block;
          cursor: pointer;
          margin: 4rem 0 2rem 0;
          position: relative;

          &::before,
          &::after {
            content: '';
            width: 100%;
            height: 100%;
            background: #2f2f2f;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
          }

          &::before {
            transform: rotate(3deg);
          }

          &::after {
            transform: rotate(-5deg);
          }

          img {
            max-width: none;
            width: 100%;
          }
        }
      }

      h3 {
        font-size: 1em;
        margin: 0 0 0.5rem;
      }

      span {
        font-weight: 300;
      }
    }
  }

  .gallery {
    grid-area: 1 / 4 / 4 / 2;
    padding: 2rem;
    display: grid;
    grid-gap: 0.75rem;
    grid-template-columns: 50% 50%;
    grid-template-rows: 2rem 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    z-index: 300;
    pointer-events: none;
    height: 100vh;
    background: var(--color-bg-facts);

    h3,
    a {
      width: 100%;
      height: 100%;
      display: grid;
    }

    h3 {
      grid-area: 1 / 1 / 2 / 3;
      color: #fff;
      font-size: 1em;
      margin: 0;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      margin: auto 0;
      display: block;
    }
  }
`;
