import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

import FactsActionsWrapper from './FactsActionsWrapper';
// import messages from './messages';

function FactsActions() {
  const actions = [
    {
      name: 'more',
      icon: 'dot',
      text: 'See more facts',
    },
    {
      name: 'less',
      icon: 'cross',
      text: 'See less facts',
    },
  ];
  return (
    <FactsActionsWrapper>
      <div>
        <span className="facts__toggle-inner facts__toggle-inner--more">
          <Icon name="dot" />
          <span className="facts__toggle-text">See more facts</span>
        </span>
        <span className="facts__toggle-inner facts__toggle-inner--less">
          <Icon name="cross" />
          <span className="facts__toggle-text">See less facts</span>
        </span>
      </div>
      <button type="button" className="button-contentclose">
        <Icon name="close" />
      </button>
    </FactsActionsWrapper>
  );
}

export default FactsActions;
