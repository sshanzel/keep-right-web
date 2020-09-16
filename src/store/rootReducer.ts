import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action, AnyAction, combineReducers} from 'redux';
import {app} from './app.reducers';
import {auth} from './auth.reducers';

const rootReducer = combineReducers({
  app,
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;

export type StoreDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export type ReduxThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default rootReducer;
