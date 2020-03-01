import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

import ToursIndexWrapper from './ToursIndexWrapper';
// import messages from './messages';

function ToursIndex() {
  return (
    <ToursIndexWrapper>
      <span>
        <span>01</span>
      </span>
      <span>04</span>
    </ToursIndexWrapper>
  );
}

export default ToursIndex;
