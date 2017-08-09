import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen }
});

const AppWithNavigationState = ({ dispatch, navigation }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigation })} />
);

const mapStateToProps = state => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps)(AppWithNavigationState);