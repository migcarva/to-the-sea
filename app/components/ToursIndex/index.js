import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

import NavigationWrapper from './NavigationWrapper';
// import messages from './messages';

function Navigation() {
  return (
    <NavigationWrapper>
      <button type="button">
        <Icon name="navup" />
      </button>
      <button type="button">
        <Icon name="navdown" />
      </button>
    </NavigationWrapper>
  );
}

export default Navigation;
