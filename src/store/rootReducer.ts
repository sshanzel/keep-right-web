import {ThunkDispatch} from 'redux-thunk';
import {AnyAction, combineReducers} from 'redux';
import {user} from './user.reducers';

const rootReducer = combineReducers({
  user,
});

export type RootState = ReturnType<typeof rootReducer>;

export type StoreDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export default rootReducer;
