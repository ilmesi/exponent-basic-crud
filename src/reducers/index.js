import { combineReducers } from 'redux';
import navigation from './navigation';

const applicationReducers = {
  navigation
};

export default function createReducer() {
  return combineReducers(applicationReducers);
};