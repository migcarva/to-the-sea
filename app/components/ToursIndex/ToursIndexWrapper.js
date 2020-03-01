import styled from 'styled-components';

export default styled.div`
  font-weight: bold;
  font-size: 0.75rem;
  display: block;
  align-self: end;
  padding: 0 4rem 3rem 20%;
  grid-area: sections-index;
  display: flex;
  z-index: 1;

  span:first-child {
    position: relative;
    overflow: hidden;

    span {
      display: block;
      width: 1.15rem;
    }
  }

  span:nth-child(2) {
    position: relative;
    margin: 0 0 0 8rem;

    &::after {
      content: '';
      position: absolute;
      width: 6rem;
      height: 3px;
      top: calc(50% - 1.5px);
      right: calc(100% + 1rem);
      background: #000;
    }
  }
`;
