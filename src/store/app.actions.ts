import {init} from './app.reducers';
import {ReduxThunk} from './rootReducer';
import {observeAuthStateChanges} from './auth.actions';
import {initializeFirebaseApp} from './../services/auth.service';

export const initializeApp = (): ReduxThunk => (dispatch, getState) => {
  const state = getState();

  if (state.app.isInitialized) return;

  const keepRight = initializeFirebaseApp();

  dispatch(init(keepRight));

  dispatch(observeAuthStateChanges());
};
