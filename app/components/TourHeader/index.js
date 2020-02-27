import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import H2 from './H2';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <div className="section__content">
        <H2 className="section__title">title</H2>
        <p className="section__description">
          <span className="section__description-inner">Lead</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
