import { NavigationActions } from 'react-navigation';
import * as ActionTypes from '../actions';
import { AppNavigator } from '../RootNavigation';

const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

const navigationReducer = (state = initialNavState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_LOGIN:
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      );
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
}

export default navigationReducer;