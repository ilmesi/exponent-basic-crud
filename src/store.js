import { createStore } from 'redux';
import createReducer from './reducers';


export default configureStore = (initialState = {}) => {
  return createStore(createReducer(), initialState);
}
