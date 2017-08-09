import React from 'react';
import { Provider } from 'react-redux';
import RootNavigation from './RootNavigation';

const Root = (store) => (
  <Provider store={store}>
    <RootNavigation />
  </Provider>
);

export default Root;