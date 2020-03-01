/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Icons from 'components/Icons';

import GlobalStyle from '../../global-styles';

import AppWrapper from './AppWrapper';

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="to the sea" defaultTitle="to the sea tours">
        <meta name="description" content="to the sea tours" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Icons />
      <GlobalStyle />
    </AppWrapper>
  );
}
