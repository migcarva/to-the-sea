import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

import TourWrapper from './TourWrapper';
// import messages from './messages';

function Tour({ title, description, cover, facts, galery, buyUrl }) {
  return (
    <TourWrapper>
      <div className="content">
        <h2>{title}</h2>
        <p>
          <span>{description}</span>
        </p>
      </div>
      <div className="img">
        <div style={{ backgroundImage: `url(${cover.src})` }} />
      </div>
      <div className="more">
        <div>
          <span>Want to know more?</span>
          <a href={buyUrl}>
            <span>Explore all hikes</span>
            <Icon name="arrowlong" />
          </a>
        </div>
      </div>
      <div className="expander" />
      <ul className="facts">
        {facts.map(fact => (
          <li key={fact.title}>
            <h3>{fact.title}</h3>
            <span>{fact.detail}</span>
          </li>
        ))}
        <li data-gallery="gallery1">
          <div>
            <img src={galery[0].src} alt={galery[0].alt} />
            <Icon name="grid" />
          </div>
          <h3>More impressions</h3>
          <span>A collection of images</span>
        </li>
      </ul>
      <div className="gallery" id="gallery1">
        <h3 className="tour__gallery-item tour__gallery-item--title">
          More impressions
        </h3>
        {galery.map((image, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Link key={index} className="tour__gallery-item" to={image.link}>
            <img src={image.src} alt={image.alt} />
          </Link>
        ))}
      </div>
    </TourWrapper>
  );
}

// title, description, cover, facts, galery, buyUrl
Tour.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: PropTypes.object.isRequired,
  facts: PropTypes.array.isRequired,
  galery: PropTypes.array.isRequired,
  buyUrl: PropTypes.string.isRequired,
};

export default Tour;
