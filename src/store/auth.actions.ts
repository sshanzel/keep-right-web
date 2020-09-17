import {ReduxThunk} from './rootReducer';
import {getUser} from 'src/services/user.service';
import {setHeaderAuthToken} from 'src/services/http.service';
import {setUser, setIsObservingState} from './auth.reducers';
import {observeStateChanges} from './../services/auth.service';

export const observeAuthStateChanges = (): ReduxThunk => (dispatch, getState) => {
  const state = getState();

  if (!state.app.keepRight) return;

  if (state.auth.isObservingState) return;

  dispatch(setIsObservingState(true));

  observeStateChanges(async user => {
    try {
      if (!user) return dispatch(setUser());

      setHeaderAuthToken(await user.getIdToken());

      const response = await getUser();

      response.data.firebaseUser = user;

      dispatch(setUser(response.data));
    } catch (ex) {
      // log error
    }
  });
};
