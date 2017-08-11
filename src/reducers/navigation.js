import { NavigationActions } from 'react-navigation';
import * as ActionTypes from '../actions';
import { AppNavigator } from '../RootNavigation';

const loginAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  loginAction
);

const navigationReducer = (state = initialNavState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_LOGIN:
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      );
    case ActionTypes.FETCH_ITEM:
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Detail' }),
        state
      );
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
}

export default navigationReducer;