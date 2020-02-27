import styled from 'styled-components';

export default styled.div`
  .js &.loading::before,
  .js &.loading::after {
    content: '';
    position: fixed;
    z-index: 100000;
  }

  .js &.loading::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-bg-main);
  }

  .js &.loading::after {
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;
    pointer-events: none;
    opacity: 0;
    background: var(--color-text);
    animation: loaderAnim 0.8s ease-in infinite alternate forwards;
  }
`;
