import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the toursScroller state domain
 */

const selectToursScrollerDomain = state => state.toursScroller || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ToursScroller
 */

const makeSelectToursScroller = () =>
  createSelector(
    selectToursScrollerDomain,
    substate => substate,
  );

export default makeSelectToursScroller;
export { selectToursScrollerDomain };
