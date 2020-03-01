/**
 *
 * ToursScroller
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Header from 'components/Header';
import FactsActions from 'components/FactsActions';
import ToursIndex from 'components/ToursIndex';

import makeSelectToursScroller from './selectors';
import reducer from './reducer';
import saga from './saga';

import ToursScrollerWrapper from './ToursScrollerWrapper';
// import messages from './messages';

export function ToursScroller() {
  useInjectReducer({ key: 'toursScroller', reducer });
  useInjectSaga({ key: 'toursScroller', saga });

  const tours = [
    {
      title: 'Hiking',
      description:
        'Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on trails (footpaths), in the countryside, while the word walking is used for shorter, particularly urban walks.',
      buyUrl: 'https://google.com',
      cover: {
        src: 'img/1.jpg',
        alt: 'Hiking',
      },
      facts: [
        { title: 'Biggest lake', detail: 'Caspian sea in Kazakhstan' },
        { title: 'Coolest activity', detail: 'Kayaking the whole lake' },
        { title: 'Lake depth', detail: "With 55m it's the deepest" },
        { title: 'Biggest lake', detail: 'Caspian sea in Kazakhstan' },
      ],
      galery: [
        {
          src: 'img/thumb1.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb2.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb3.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb4.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb5.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb6.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
      ],
    },
    {
      title: 'Lakes',
      description:
        'A lake is an area filled with water, localized in a basin, that is surrounded by land, apart from any river or other outlet that serves to feed or drain the lake. Lakes lie on land and are not part of the ocean.',
      buyUrl: 'https://google.com',
      cover: {
        src: 'img/2.jpg',
        alt: 'Lakes',
      },
      facts: [
        { title: 'Biggest lake', detail: 'Caspian sea in Kazakhstan' },
        { title: 'Coolest activity', detail: 'Kayaking the whole lake' },
        { title: 'Lake depth', detail: "With 55m it's the deepest" },
      ],
      galery: [
        {
          src: 'img/thumb1.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb2.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb3.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb4.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb5.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb6.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
      ],
    },
    {
      title: 'Paths',
      description:
        'A footpath (also pedestrian way, walking trail, nature trail) is a type of thoroughfare that is intended for use only by pedestrians and not other forms of traffic such as motorized vehicles, cycles, and horses.',
      buyUrl: 'https://google.com',
      cover: {
        src: 'img/3.jpg',
        alt: 'Paths',
      },
      facts: [
        { title: 'Lovely paths', detail: 'Caspian sea in Kazakhstan' },
        { title: 'Haunted ways', detail: 'Kayaking the whole lake' },
        { title: 'Running and more', detail: "With 55m it's the deepest" },
        { title: 'Starting to walk', detail: 'An aerial view of the lake' },
      ],
      galery: [
        {
          src: 'img/thumb1.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb2.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb3.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb4.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb5.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb6.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
      ],
    },
    {
      title: 'Rivers',
      description:
        'A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, sea, lake or another river. In some cases a river flows into the ground and becomes dry at the end of its course without reaching another body of water.',
      buyUrl: 'https://google.com',
      cover: {
        src: 'img/4.jpg',
        alt: 'Rivers',
      },
      facts: [
        { title: 'River romantics', detail: 'Caspian sea in Kazakhstan' },
        { title: 'History call', detail: 'Kayaking the whole lake' },
        { title: 'Walking around', detail: "With 55m it's the deepest" },
        { title: 'How many miles?', detail: 'Caspian sea in Kazakhstan' },
      ],
      galery: [
        {
          src: 'img/thumb1.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb2.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb3.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb4.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb5.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
        {
          src: 'img/thumb6.jpg',
          alt: 'Some description of something',
          link: 'https://google.com',
        },
      ],
    },
  ];

  // <FormattedMessage {...messages.header} />
  return (
    <ToursScrollerWrapper>
      <Header />
      <FactsActions />
      <ToursIndex />
    </ToursScrollerWrapper>
  );
}

ToursScroller.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  toursScroller: makeSelectToursScroller(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ToursScroller);
