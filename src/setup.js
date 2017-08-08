import React from 'react';
import configureStore from './store';
import Root from './containers/Root';

const store = configureStore();

export default () => Root(store);