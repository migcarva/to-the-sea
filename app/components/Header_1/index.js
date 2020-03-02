import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

import HeaderWrapper from './HeaderWrapper';
import messages from './messages';

function Header() {
  const links = [
    {
      url: '/about',
      title: 'Our Story',
    },
    {
      url: '/tours',
      title: 'Tours',
    },
    {
      url: '/testimonials',
      title: 'Testimonials',
    },
    {
      url: '/contact',
      title: 'Contact',
    },
  ];
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>tothesea</h1>
      </Link>
      <nav>
        <ul>
          {links.map(link => (
            <li key={link.url}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div>
          <span>
            <Icon name="menu" />
          </span>
          <span>
            <Icon name="close" />
          </span>
        </div>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
