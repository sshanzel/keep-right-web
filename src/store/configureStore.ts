import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer, {RootState} from './rootReducer';

export default function configureStore(initialState?: RootState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
