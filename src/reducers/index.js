import { combineReducers } from 'redux'

const applicationReducers = {
  removeThisReducerOnceYouAddALegitOne: () => ({}),
};

export default function createReducer() {
  return combineReducers(applicationReducers);
};