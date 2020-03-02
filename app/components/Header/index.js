import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import HeaderWrapper from './HeaderWrapper';
// import messages from './messages';

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>tothesea</h1>
      </Link>
    </HeaderWrapper>
  );
}

export default Header;
