/**
 *
 * Icon.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  fill: currentColor;
`;

function Icon({ name }) {
  return (
    <Svg className={`icon icon--${name}`}>
      <use xlinkHref={`#icon-${name}`} />
    </Svg>
  );
  // return <svg className={props.className} src={props.src} alt={props.alt} />;
}

// We require the use of src and alt, only enforced by react in dev mode
Icon.propTypes = {
  name: PropTypes.oneOf([
    'arrow',
    'drop',
    'menu',
    'dot',
    'cross',
    'arrowlong',
    'close',
    'navup',
    'navdown',
    'grid',
  ]).isRequired,
};

export default Icon;
